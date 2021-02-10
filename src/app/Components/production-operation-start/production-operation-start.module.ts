import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionOperationStartRoutingModule } from './production-operation-start-routing.module';
import { ProductionOperationStartComponent } from './production-operation-start.component';


@NgModule({
  declarations: [ProductionOperationStartComponent],
  imports: [
    CommonModule,
    ProductionOperationStartRoutingModule
  ]
})
export class ProductionOperationStartModule { }
