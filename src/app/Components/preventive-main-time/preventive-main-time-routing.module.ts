import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreventiveMainTimeComponent } from './preventive-main-time.component';

const routes: Routes = [{ path: '', component: PreventiveMainTimeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreventiveMainTimeRoutingModule { }
