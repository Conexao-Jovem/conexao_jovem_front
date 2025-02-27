import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../../ui/components/title/title.component';
import { TextInputComponent } from '../../../../../ui/components/inputs/text-input/text-input.component';
import { FileInputComponent } from '../../../../../ui/components/inputs/file-input/file-input.component';
import { UserInputComponent } from '../../../../../ui/components/inputs/user-input/user-input.component';
import { ButtonComponent } from '../../../../../ui/components/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../../../data/services/user/@types/find.dto';
import { CreateMinisteryDto } from '../../../../../data/services/ministery/@types/create.dto';
import { MinisteryService } from '../../../../../data/services/firebaseServices/ministery/ministery.service';
import { UserService } from '../../../../../data/services/firebaseServices/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  imports: [TitleComponent, TextInputComponent, FileInputComponent, UserInputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewMinisteryPage implements OnInit {
  form!: FormGroup;

  protected membersId: string[] = [];
  protected principalId: string = '';

  titleInputProps: Partial<HTMLInputElement> = {
    name: 'title',
    placeholder: 'Informe o nome do ministério',
    type: 'text'
  };

  constructor(private ministeryService: MinisteryService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required])
    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid && this.principalId !== '') {
      this.createMinistery();
      this.router.navigate(['/main/ministerys']);
      console.log('Sucesso');
    } else {
      console.log('Formulário inválido');
    }
  }

  async createMinistery() {
    const ministery: CreateMinisteryDto = {
      imgUrl: `https://github.com/Conexao-Jovem.png`,
      membersId: this.membersId,
      name: this.form.value.title,
      principalId: this.principalId
    };

    const ministeryId = await this.ministeryService.create(ministery);
    await this.userService.update(this.principalId, { ministeryID: ministeryId });

    for (const memberId of this.membersId) {
      await this.userService.update(memberId, { ministeryID: ministeryId });
    }
  }

  onSelectPrincipalUser(users: User[]) {
    this.principalId = users[0]?.id || '';
  }

  onSelectUsers(users: User[]) {
    this.membersId = users.map(user => user.id);
  }
}
