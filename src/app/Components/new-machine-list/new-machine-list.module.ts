import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMachineListRoutingModule } from './new-machine-list-routing.module';
import { NewMachineListComponent } from './new-machine-list.component';


@NgModule({
  declarations: [NewMachineListComponent],
  imports: [
    CommonModule,
    NewMachineListRoutingModule
  ]
})
export class NewMachineListModule { }
