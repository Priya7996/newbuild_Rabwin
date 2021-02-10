import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AquistionReportRoutingModule } from './aquistion-report-routing.module';
import { AquistionReportComponent } from './aquistion-report.component';


@NgModule({
  declarations: [AquistionReportComponent],
  imports: [
    CommonModule,
    AquistionReportRoutingModule
  ]
})
export class AquistionReportModule { }
