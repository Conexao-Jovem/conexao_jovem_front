import { Component } from '@angular/core';
import { TitleComponent } from '../../../../../ui/components/title/title.component';
import { TextInputComponent } from '../../../../../ui/components/inputs/text-input/text-input.component';
import { FileInputComponent } from '../../../../../ui/components/inputs/file-input/file-input.component';
import { UserInputComponent } from '../../../../../ui/components/inputs/user-input/user-input.component';
import { ButtonComponent } from '../../../../../ui/components/button/button.component';
import { UserInputModalComponent } from '../../../../../ui/components/user-input-modal/user-input-modal.component';

@Component({
  selector: 'app-new',
  imports: [TitleComponent, TextInputComponent, FileInputComponent, UserInputComponent, ButtonComponent, UserInputModalComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewMinisteryPage {
  titleInputProps: Partial<HTMLInputElement> = {
    name: 'title',
    placeholder: 'Informe o nome do ministério',
    type: 'text'
  };
}
