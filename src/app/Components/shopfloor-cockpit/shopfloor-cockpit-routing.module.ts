import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopfloorCockpitComponent } from './shopfloor-cockpit.component';

const routes: Routes = [{ path: '', component: ShopfloorCockpitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopfloorCockpitRoutingModule { }
