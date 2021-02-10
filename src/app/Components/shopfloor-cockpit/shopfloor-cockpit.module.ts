import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopfloorCockpitRoutingModule } from './shopfloor-cockpit-routing.module';
import { ShopfloorCockpitComponent } from './shopfloor-cockpit.component';


@NgModule({
  declarations: [ShopfloorCockpitComponent],
  imports: [
    CommonModule,
    ShopfloorCockpitRoutingModule
  ]
})
export class ShopfloorCockpitModule { }
