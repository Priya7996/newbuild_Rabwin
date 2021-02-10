import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorViewRoutingModule } from './operator-view-routing.module';
import { OperatorViewComponent } from './operator-view.component';


@NgModule({
  declarations: [OperatorViewComponent],
  imports: [
    CommonModule,
    OperatorViewRoutingModule
  ]
})
export class OperatorViewModule { }
