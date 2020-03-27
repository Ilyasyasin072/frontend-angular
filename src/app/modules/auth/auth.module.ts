import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LandingComponent } from './component/landing/landing.component';
import { MoviesComponent } from './component/movies/movies.component';
import { CustomersComponent } from './component/customers/customers.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, LandingComponent, MoviesComponent, CustomersComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DataTablesModule,
    MatCardModule
  ]
})
export class AuthModule { }
