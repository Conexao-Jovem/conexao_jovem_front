import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conexao_jovem_front';

  constructor(){
    initializeApp(firebaseConfig)
  }
}
