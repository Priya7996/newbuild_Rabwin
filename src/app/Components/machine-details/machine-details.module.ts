import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineDetailsRoutingModule } from './machine-details-routing.module';
import { MachineDetailsComponent } from './machine-details.component';


@NgModule({
  declarations: [MachineDetailsComponent],
  imports: [
    CommonModule,
    MachineDetailsRoutingModule
  ]
})
export class MachineDetailsModule { }
