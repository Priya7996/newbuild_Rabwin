import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreventiveMaintenanceRoutingModule } from './preventive-maintenance-routing.module';
import { PreventiveMaintenanceComponent } from './preventive-maintenance.component';


@NgModule({
  declarations: [PreventiveMaintenanceComponent],
  imports: [
    CommonModule,
    PreventiveMaintenanceRoutingModule
  ]
})
export class PreventiveMaintenanceModule { }
