import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionIdleReasonRoutingModule } from './production-idle-reason-routing.module';
import { ProductionIdleReasonComponent } from './production-idle-reason.component';


@NgModule({
  declarations: [ProductionIdleReasonComponent],
  imports: [
    CommonModule,
    ProductionIdleReasonRoutingModule
  ]
})
export class ProductionIdleReasonModule { }
