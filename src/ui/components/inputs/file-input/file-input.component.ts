import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Edit, LucideAngularModule, Upload } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-input',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true
    }
  ]
})
export class FileInputComponent implements ControlValueAccessor {
  readonly EditIcon = Edit;
  readonly UploadIcon = Upload;

  @Output() imageSelected = new EventEmitter<File>();
  previewUrl: string | ArrayBuffer | null = null;
  errorMessage: string | null = null;

  allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  maxSizeMB = 5;
  private file: File | null = null;
  private onChange: (file: File | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(file: File | null): void {
    if (file) {
      this.previewImage(file);
    }
    this.file = file;
  }

  registerOnChange(fn: (file: File | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

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
    this.file = file;
    this.onChange(file); // Notificar o formulário sobre a mudança do valor
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
