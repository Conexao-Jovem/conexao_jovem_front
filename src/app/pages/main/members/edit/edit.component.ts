import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../ui/components/button/button.component';
import { TitleComponent } from '../../../../../ui/components/title/title.component';
import { TextInputComponent } from '../../../../../ui/components/inputs/text-input/text-input.component';
import { SelectInputComponent } from '../../../../../ui/components/inputs/select-input/select-input.component';
import { CreateUserDto } from '../../../../../data/services/user/@types/create.dto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../../data/services/firebaseServices/user/user.service';
import { MinisteryService } from '../../../../../data/services/firebaseServices/ministery/ministery.service';
import { ActivatedRoute, Router } from '@angular/router';
import { arrayUnion } from 'firebase/firestore';
import { User } from '../../../../../data/services/user/@types/find.dto';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-edit',
  imports: [ButtonComponent, TitleComponent, TextInputComponent, SelectInputComponent, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditUserPage {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    lastname: new FormControl(''),
    department: new FormControl('')
  });
  userId: string = '';
  user!: User;

  departmentOptions: Partial<HTMLOptionElement>[] = [
    {
      value: '0',
      label: 'Selecione um departamento'
    }
  ];

  constructor(private userService: UserService, private ministeryService: MinisteryService, private router: Router, private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    await this.loadDepartments();

    this.userId = await firstValueFrom(this.route.paramMap).then(params => params.get('id') || '');

    this.user = (await this.userService.findById(this.userId)) || ({} as User);

    this.form = new FormGroup({
      email: new FormControl(this.user.email || '', [Validators.required, Validators.email]),
      name: new FormControl(this.user.name.split(' ')[0] || '', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl(this.user.name.split(' ')[1] || '', [Validators.required, Validators.minLength(3)]),
      department: new FormControl(this.user.ministeryID || '')
    });
  }

  async loadDepartments() {
    const ministerys = await this.ministeryService.findAll();
    const ministerysToOption: Partial<HTMLOptionElement>[] = ministerys.map(ministery => ({ value: ministery.id, label: ministery.name }));

    this.departmentOptions = this.departmentOptions.concat(ministerysToOption);
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      await this.updateUser();
      this.router.navigate(['/main/members']);
    } else {
    }
  }

  async updateUser() {
    const updatedUser: Partial<User> = {
      email: this.form.value.email,
      name: `${this.form.value.name} ${this.form.value.lastname}`,
      ministeryID: this.form.value.department || '',
      imgUrl: this.user.imgUrl || 'defaultUser.png'
    };

    await this.userService.update(this.userId, updatedUser);
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
}
