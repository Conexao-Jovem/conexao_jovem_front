import { Component } from '@angular/core';
import { TitleComponent } from '../../../../../ui/components/title/title.component';
import { ButtonComponent } from '../../../../../ui/components/button/button.component';
import { LucideAngularModule, X } from 'lucide-angular';
import { DateInputComponent } from '../../../../../ui/components/inputs/date-input/date-input.component';
import { Scale } from '../../../../../data/services/scales/@types/find.dto';
import { SelectInputComponent } from '../../../../../ui/components/inputs/select-input/select-input.component';

@Component({
  selector: 'app-new-scale',
  imports: [TitleComponent, ButtonComponent, LucideAngularModule, DateInputComponent, SelectInputComponent],
  templateUrl: './new-scale.component.html',
  styleUrl: './new-scale.component.scss'
})
export class NewScaleComponent {
  readonly XIcon = X;
  scales: Scale[] = [];

  departmentInput: Partial<HTMLSelectElement> = {
    name: 'department',
    ariaPlaceholder: 'Selecione um departamento'
  };

  departmentOptions: Partial<HTMLOptionElement>[] = [
    {
      value: '0',
      label: 'Selecione um departamento'
    },
    {
      value: '1',
      label: 'Louvor'
    },
    {
      value: '2',
      label: 'Diretoria'
    }
  ];
}
