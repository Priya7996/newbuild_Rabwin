import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorViewComponent } from './operator-view.component';

const routes: Routes = [{ path: '', component: OperatorViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorViewRoutingModule { }
