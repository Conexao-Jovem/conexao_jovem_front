import { Component } from '@angular/core';
import { TitleComponent } from '../../../../ui/components/title/title.component';
import { TextInputComponent } from '../../../../ui/components/inputs/text-input/text-input.component';

@Component({
  selector: 'app-new',
  imports: [TitleComponent, TextInputComponent],
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
