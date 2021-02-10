import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreventiveMainTimeRoutingModule } from './preventive-main-time-routing.module';
import { PreventiveMainTimeComponent } from './preventive-main-time.component';


@NgModule({
  declarations: [PreventiveMainTimeComponent],
  imports: [
    CommonModule,
    PreventiveMainTimeRoutingModule
  ]
})
export class PreventiveMainTimeModule { }
