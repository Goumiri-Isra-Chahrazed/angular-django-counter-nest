import { Routes } from '@angular/router';
import { Up } from './pages/up/up';
import { Down } from './pages/down/down';
import { Reset } from './pages/reset/reset';


export const routes: Routes = [
  { path: '', redirectTo: 'up', pathMatch: 'full' },
  { path: 'up', component: Up },
  { path: 'down', component: Down },
  { path: 'reset', component: Reset },
];
