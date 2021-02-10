import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentiveProductiveRoutingModule } from './presentive-productive-routing.module';
import { PresentiveProductiveComponent } from './presentive-productive.component';


@NgModule({
  declarations: [PresentiveProductiveComponent],
  imports: [
    CommonModule,
    PresentiveProductiveRoutingModule
  ]
})
export class PresentiveProductiveModule { }
