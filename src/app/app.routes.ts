import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { EmployeeDashboard } from './components/employee-dashboard/employee-dashboard';

export const routes: Routes = [
  {
    path: 'users/login',
    component: Login
  },
  {
    path: 'users/dashboard',   // fixed typo: "dasboard" → "dashboard"
    component: EmployeeDashboard
  }
];
