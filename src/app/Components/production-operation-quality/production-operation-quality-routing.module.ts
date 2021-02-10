import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionOperationQualityComponent } from './production-operation-quality.component';

const routes: Routes = [{ path: '', component: ProductionOperationQualityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionOperationQualityRoutingModule { }
