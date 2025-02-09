import { Component } from '@angular/core';
import { TextInputComponent } from '../../../ui/components/inputs/text-input/text-input.component';
import { ButtonComponent } from "../../../ui/components/button/button.component";
import { GoogleIconComponent } from "../../../ui/icons/google-icon/google-icon.component";
import { FacebookIconComponent } from "../../../ui/icons/facebook-icon/facebook-icon.component";

@Component({
  selector: 'app-login',
  imports: [TextInputComponent, ButtonComponent, GoogleIconComponent, FacebookIconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginPage {
  emailInput: Partial<HTMLInputElement> = {
    placeholder: 'Digite seu e-mail',
    name: 'email',
    type: 'email'
  }

  senhaInput: Partial<HTMLInputElement> = {
    placeholder: 'Informe sua senha',
    name: 'senha ',
    type: 'password'
  }
}