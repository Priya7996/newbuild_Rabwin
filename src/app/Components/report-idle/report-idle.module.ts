import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';

import { ReportIdleComponent } from './report-idle.component';

const routes: Routes = [{ path: '', component: ReportIdleComponent }];

@NgModule({
  declarations: [ReportIdleComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule
  ],
  providers: [
    DatePipe
  ]
})
export class ReportIdleModule { }
