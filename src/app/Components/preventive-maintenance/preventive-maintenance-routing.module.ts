import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreventiveMaintenanceComponent } from './preventive-maintenance.component';

const routes: Routes = [{ path: '', component: PreventiveMaintenanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreventiveMaintenanceRoutingModule { }
