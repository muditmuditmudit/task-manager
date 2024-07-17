import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';

export const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'tasks',
    component: UsersComponent,
  },
  {
    path: 'tasks/add',
    component: UserFormComponent,
  },
  {
    path: 'tasks/:id',
    component: UserFormComponent,
  },
];
