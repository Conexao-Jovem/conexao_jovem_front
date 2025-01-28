import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { MembersPage } from './pages/members/members.component';
import { MinisterysPage } from './pages/ministerys/ministerys.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NewMemberPage } from './pages/members/new/new.component';
import { NewMinisteryPage } from './pages/ministerys/new/new.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'members',
    component: MembersPage
  },
  {
    path: 'members/new',
    component: NewMemberPage
  },
  {
    path: 'ministerys',
    component: MinisterysPage
  },
  {
    path: 'ministerys/new',
    component: NewMinisteryPage
  }
];
