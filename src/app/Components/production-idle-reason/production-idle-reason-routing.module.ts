import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionIdleReasonComponent } from './production-idle-reason.component';

const routes: Routes = [{ path: '', component: ProductionIdleReasonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionIdleReasonRoutingModule { }
