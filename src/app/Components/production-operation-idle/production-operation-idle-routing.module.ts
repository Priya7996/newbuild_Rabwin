import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionOperationIdleComponent } from './production-operation-idle.component';

const routes: Routes = [{ path: '', component: ProductionOperationIdleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionOperationIdleRoutingModule { }
