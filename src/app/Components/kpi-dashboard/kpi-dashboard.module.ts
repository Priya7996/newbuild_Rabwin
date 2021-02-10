import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpiDashboardRoutingModule } from './kpi-dashboard-routing.module';
import { KpiDashboardComponent } from './kpi-dashboard.component';


@NgModule({
  declarations: [KpiDashboardComponent],
  imports: [
    CommonModule,
    KpiDashboardRoutingModule
  ]
})
export class KpiDashboardModule { }
