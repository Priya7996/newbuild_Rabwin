import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionDevelopmentComponent } from './production-development.component';

const routes: Routes = [{ path: '', component: ProductionDevelopmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionDevelopmentRoutingModule { }
