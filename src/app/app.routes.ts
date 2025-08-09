import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Map } from './pages/map/map';

export const routes: Routes = [
    {
      path: '',
      component: Login
   },
   {
      path: 'login',
      component: Login
   },
   {
      path: 'dashboard',
      component: Dashboard
   },
   {
      path: 'map',
      component: Map
   }
];
