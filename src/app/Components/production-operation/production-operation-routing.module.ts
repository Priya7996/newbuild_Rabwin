import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionOperationComponent } from './production-operation.component';

const routes: Routes = [{ path: '', component: ProductionOperationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionOperationRoutingModule { }
