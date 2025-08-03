import { RouterModule, Routes } from '@angular/router';
import { PublicLayout } from './shared/layout/public-layout/public-layout';
import { Home } from './public/home/home';
import { Contact } from './public/contact/contact';
import { Login } from './public/login/login';
import { NgModule } from '@angular/core';
import { PrivateLayout } from './shared/layout/private-layout/private-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Tractors } from './pages/tractors/tractors';
import { Bookings } from './pages/bookings/bookings';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
     {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Home },
      { path: 'contact', component: Contact },
      { path: 'login', component: Login },
    ],
  },
  {
    path: '',
    component: PrivateLayout,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'tractors', component: Tractors },
      { path: 'bookings', component: Bookings },
    ],
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}