import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMachineListComponent } from './new-machine-list.component';

const routes: Routes = [{ path: '', component: NewMachineListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewMachineListRoutingModule { }
