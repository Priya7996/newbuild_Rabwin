import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendAnalysisRoutingModule } from './trend-analysis-routing.module';
import { TrendAnalysisComponent } from './trend-analysis.component';


@NgModule({
  declarations: [TrendAnalysisComponent],
  imports: [
    CommonModule,
    TrendAnalysisRoutingModule
  ]
})
export class TrendAnalysisModule { }
