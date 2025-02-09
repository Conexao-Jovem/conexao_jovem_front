import { Component } from '@angular/core';
import { TitleComponent } from '../../../../../ui/components/title/title.component';
import { TextInputComponent } from '../../../../../ui/components/inputs/text-input/text-input.component';
import { SelectInputComponent } from '../../../../../ui/components/inputs/select-input/select-input.component';
import { FileInputComponent } from '../../../../../ui/components/inputs/file-input/file-input.component';
import { ButtonComponent } from '../../../../../ui/components/button/button.component';

@Component({
  selector: 'app-new',
  imports: [TitleComponent, TextInputComponent, SelectInputComponent, FileInputComponent, ButtonComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewMemberPage {
  emailInput: Partial<HTMLInputElement> = {
    placeholder: 'E-mail',
    name: 'email',
    type: 'email'
  };

  nameInput: Partial<HTMLInputElement> = {
    placeholder: 'Informe o primeiro nome',
    name: 'name',
    type: 'text'
  };

  lastnameInput: Partial<HTMLInputElement> = {
    placeholder: 'Informe o último nome',
    name: 'name',
    type: 'text'
  };

  departmentInput: Partial<HTMLSelectElement> = {
    name: 'department',
    ariaPlaceholder: 'Selecione um departamento'
  };

  departmentOptions: Partial<HTMLOptionElement>[] = [
    {
      value: '-1',
      label: 'Selecione um departamento'
    }
  ];
}
