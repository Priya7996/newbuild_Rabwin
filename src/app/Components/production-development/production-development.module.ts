import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionDevelopmentRoutingModule } from './production-development-routing.module';
import { ProductionDevelopmentComponent } from './production-development.component';


@NgModule({
  declarations: [ProductionDevelopmentComponent],
  imports: [
    CommonModule,
    ProductionDevelopmentRoutingModule
  ]
})
export class ProductionDevelopmentModule { }
