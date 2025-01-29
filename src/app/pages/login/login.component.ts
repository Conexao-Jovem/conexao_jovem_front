import { Component } from '@angular/core';
import { TextInputComponent } from '../../../ui/components/inputs/text-input/text-input.component';

@Component({
  selector: 'app-login',
  imports: [TextInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginPage {
  emailInput: Partial<HTMLInputElement> = {
    placeholder: 'E-mail',
    name: 'email',
    type: 'email'}
}
export class login{
senhainput: Partial<HTMLInputElement> ={
  ariaPlaceholder: 'senha',
  name: 'senha ',
  type: 'senha'}

}