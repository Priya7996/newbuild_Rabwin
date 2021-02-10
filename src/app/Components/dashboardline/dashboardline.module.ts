import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { DashboardlineRoutingModule } from './dashboardline-routing.module';
import { DashboardlineComponent } from './dashboardline.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [{ path: '', component: DashboardlineComponent }];

@NgModule({
  declarations: [DashboardlineComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    DashboardlineRoutingModule, SharedModule,
    NgCircleProgressModule.forRoot({
      backgroundOpacity: 1,
      backgroundStrokeWidth: 15,
      "responsive": true,
      space: -17,
      maxPercent: 100,
      outerStrokeWidth: 15,
      innerStrokeWidth: 15,
      "subtitle": [
        ""
      ],
    })
  ]
})
export class DashboardlineModule { }

