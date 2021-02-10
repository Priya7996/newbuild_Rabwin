import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionOperationStartComponent } from './production-operation-start.component';

const routes: Routes = [{ path: '', component: ProductionOperationStartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionOperationStartRoutingModule { }
