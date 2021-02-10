import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrendAnalysisComponent } from './trend-analysis.component';

const routes: Routes = [{ path: '', component: TrendAnalysisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendAnalysisRoutingModule { }
