import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewOperatorRoutingModule } from './new-operator-routing.module';
import { NewOperatorComponent } from './new-operator.component';


@NgModule({
  declarations: [NewOperatorComponent],
  imports: [
    CommonModule,
    NewOperatorRoutingModule
  ]
})
export class NewOperatorModule { }
