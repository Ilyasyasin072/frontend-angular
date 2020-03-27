import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LandingComponent } from './component/landing/landing.component';
import { CustomersComponent } from './component/customers/customers.component';
import { MoviesComponent } from './component/movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component : LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: '**',
    redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
