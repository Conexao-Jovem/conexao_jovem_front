import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../../ui/components/title/title.component';
import { TextInputComponent } from '../../../../../ui/components/inputs/text-input/text-input.component';
import { SelectInputComponent } from '../../../../../ui/components/inputs/select-input/select-input.component';
import { FileInputComponent } from '../../../../../ui/components/inputs/file-input/file-input.component';
import { ButtonComponent } from '../../../../../ui/components/button/button.component';
import { UserService } from '../../../../../data/services/firebaseServices/user/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateUserDto } from '../../../../../data/services/user/@types/create.dto';

@Component({
  selector: 'app-new',
  imports: [TitleComponent, TextInputComponent, SelectInputComponent, FileInputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewMemberPage implements OnInit {
  form!: FormGroup;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null, [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      department: new FormControl('', Validators.required)
    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      this.createUser();
      console.log('Sucesso');
    } else {
      console.log('Formulário inválido');
    }
  }

  async createUser() {
    const user: CreateUserDto = {
      email: this.form.value.email,
      name: `${this.form.value.name} ${this.form.value.lastname}`,
      ministeryID: Number(this.form.value.department),
      password: `${this.form.value.name}@conexao`,
      imgUrl: `defaultUser.png`
    };

    await this.userService.create(user);
  }

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
