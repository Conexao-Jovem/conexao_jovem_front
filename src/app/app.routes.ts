import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { DayScalePage } from './pages/day-scale/day-scale.component';

export const routes: Routes = [
  {
    path: '',
    component: DayScalePage
  }
];
