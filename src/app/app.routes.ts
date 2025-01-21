import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { MembersPage } from './pages/members/members.component';
import { MinisterysPage } from './pages/ministerys/ministerys.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'members',
    component: MembersPage
  },
  {
    path: 'ministerys',
    component: MinisterysPage
  }
];
