import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { RabwinDashboardRoutingModule } from './rabwin-dashboard-routing.module';
import { RabwinDashboardComponent } from './rabwin-dashboard.component';
import { CountUpModule } from 'ngx-countup';


@NgModule({
  declarations: [RabwinDashboardComponent],
  imports: [    RabwinDashboardRoutingModule,
    CommonModule,SharedModule,
    CountUpModule,
  
  ]
})
export class RabwinDashboardModule { }
 