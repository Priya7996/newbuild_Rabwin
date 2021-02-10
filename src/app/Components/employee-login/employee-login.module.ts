import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeLoginRoutingModule } from './employee-login-routing.module';
import { EmployeeLoginComponent } from './employee-login.component';


@NgModule({
  declarations: [EmployeeLoginComponent],
  imports: [
    CommonModule,
    EmployeeLoginRoutingModule
  ]
})
export class EmployeeLoginModule { }
