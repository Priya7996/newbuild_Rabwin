import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionOperationIdleRoutingModule } from './production-operation-idle-routing.module';
import { ProductionOperationIdleComponent } from './production-operation-idle.component';


@NgModule({
  declarations: [ProductionOperationIdleComponent],
  imports: [
    CommonModule,
    ProductionOperationIdleRoutingModule
  ]
})
export class ProductionOperationIdleModule { }
