import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Edit, LucideAngularModule, Upload } from 'lucide-angular';

@Component({
  selector: 'app-file-input',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.scss'
})
export class FileInputComponent {
  readonly EditIcon = Edit;
  readonly UploadIcon = Upload;

  @Output() imageSelected = new EventEmitter<File>();
  previewUrl: string | ArrayBuffer | null = null;
  errorMessage: string | null = null;

  allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  maxSizeMB = 5;

  onFileSelected(event: Event): void {
    this.errorMessage = null;
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    const file = input.files[0];

    if (!this.isFileTypeValid(file)) {
      this.errorMessage = 'Formato inválido (use PNG, JPEG ou JPG)';
      this.resetInput(input);
      return;
    }

    if (file.size > this.maxSizeMB * 1024 * 1024) {
      this.errorMessage = `Tamanho máximo: ${this.maxSizeMB}MB`;
      this.resetInput(input);
      return;
    }

    this.previewImage(file);
    this.imageSelected.emit(file);
  }

  private isFileTypeValid(file: File): boolean {
    return this.allowedTypes.includes(file.type);
  }

  private previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  private resetInput(input: HTMLInputElement): void {
    input.value = '';
    this.previewUrl = null;
  }

  triggerFileInput(fileInput: HTMLInputElement): void {
    fileInput.click();
  }
}
