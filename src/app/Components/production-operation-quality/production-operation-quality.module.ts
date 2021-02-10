import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionOperationQualityRoutingModule } from './production-operation-quality-routing.module';
import { ProductionOperationQualityComponent } from './production-operation-quality.component';


@NgModule({
  declarations: [ProductionOperationQualityComponent],
  imports: [
    CommonModule,
    ProductionOperationQualityRoutingModule
  ]
})
export class ProductionOperationQualityModule { }
