import { Route } from '@angular/router';
import { TodoListComponent } from './todo/todo-list.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';

// TODO: routes in different file
export const routes : Route[] = [
  { path: '', component: TodoListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
