import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { MembersPage } from './pages/members/members.component';
import { MinisterysPage } from './pages/ministerys/ministerys.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NewMemberPage } from './pages/members/new/new.component';
<<<<<<< HEAD
import { DayScaleMinisteryComponent } from './pages/day-scale-ministery/day-scale-ministery.component';
=======
import { NewMinisteryPage } from './pages/ministerys/new/new.component';
>>>>>>> d7cee4bcdee9b4edcdb5092777267940f3744578

export const routes: Routes = [
  {
    path: '',
    component: DayScaleMinisteryComponent
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
