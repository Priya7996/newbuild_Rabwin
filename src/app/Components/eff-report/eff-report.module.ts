import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffReportRoutingModule } from './eff-report-routing.module';
import { EffReportComponent } from './eff-report.component';


@NgModule({
  declarations: [EffReportComponent],
  imports: [
    CommonModule,
    EffReportRoutingModule
  ]
})
export class EffReportModule { }
