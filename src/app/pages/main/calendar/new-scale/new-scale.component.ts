import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../../ui/components/title/title.component';
import { ButtonComponent } from '../../../../../ui/components/button/button.component';
import { LucideAngularModule, X } from 'lucide-angular';
import { DateInputComponent } from '../../../../../ui/components/inputs/date-input/date-input.component';
import { Scale } from '../../../../../data/services/scales/@types/find.dto';
import { SelectInputComponent } from '../../../../../ui/components/inputs/select-input/select-input.component';
import { MinisteryService } from '../../../../../data/services/firebaseServices/ministery/ministery.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateScaleDto } from '../../../../../data/services/scales/@types/create.dto';

@Component({
  selector: 'app-new-scale',
  imports: [TitleComponent, ButtonComponent, LucideAngularModule, DateInputComponent, SelectInputComponent, ReactiveFormsModule],
  templateUrl: './new-scale.component.html',
  styleUrl: './new-scale.component.scss'
})
export class NewScaleComponent implements OnInit {
  readonly XIcon = X;
  scales: Scale[] = [];
  form!: FormGroup;

  departmentOptions: Partial<HTMLOptionElement>[] = [
    {
      value: '0',
      label: 'Selecione um departamento'
    }
  ];

  departmentInput: Partial<HTMLSelectElement> = {
    name: 'department',
    ariaPlaceholder: 'Selecione um departamento'
  };

  constructor(private ministeryService: MinisteryService) {}

  async ngOnInit(): Promise<void> {
    this.form = new FormGroup({
      date: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required)
    });
    await this.loadDepartments();
  }

  async onSubmit() {
    if (this.form.valid) {
      await this.createScale();
      console.log('Sucesso');
    } else {
      console.log(this.form.value);
      console.log('Formulário Inválido');
    }
  }

  async loadDepartments() {
    const ministerys = await this.ministeryService.findAll();
    const ministerysToOption: Partial<HTMLOptionElement>[] = ministerys.map(ministery => ({ value: ministery.id, label: ministery.name }));

    this.departmentOptions = this.departmentOptions.concat(ministerysToOption);
  }

  async createScale() {
    const newScale: CreateScaleDto = {
      date: this.form.value.date,
      ministeryID: this.form.value.department
    };
    console.log(newScale);

    // await this.ministeryService.create(newScale);
  }
}
