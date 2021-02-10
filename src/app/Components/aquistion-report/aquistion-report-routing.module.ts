import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AquistionReportComponent } from './aquistion-report.component';

const routes: Routes = [{ path: '', component: AquistionReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AquistionReportRoutingModule { }
