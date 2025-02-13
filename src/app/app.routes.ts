import { Routes } from '@angular/router';
import { MinisterysPage } from './pages/main/ministerys/ministerys.component';
import { CalendarComponent } from './pages/main/calendar/calendar.component';
import { NewMinisteryPage } from './pages/main/ministerys/new/new.component';
import { LoginPage } from './pages/login/login.component';
import { MembersPage } from './pages/main/members/members.component';
import { NewMemberPage } from './pages/main/members/new/new.component';
import { MainTemplateComponent } from './templates/main/main.component';
import { HomePage } from './pages/main/home/home.component';
import { EventPage } from './pages/main/event/event-page.component';
import { NewScaleComponent } from './pages/main/calendar/new-scale/new-scale.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainTemplateComponent,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'calendar/scale/new',
        component: NewScaleComponent
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
    ]
  },
  {
    path: 'main/event/:id',
    component: EventPage
  }
];
