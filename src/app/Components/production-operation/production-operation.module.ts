import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionOperationRoutingModule } from './production-operation-routing.module';
import { ProductionOperationComponent } from './production-operation.component';


@NgModule({
  declarations: [ProductionOperationComponent],
  imports: [
    CommonModule,
    ProductionOperationRoutingModule
  ]
})
export class ProductionOperationModule { }
