import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentiveProductiveComponent } from './presentive-productive.component';

const routes: Routes = [{ path: '', component: PresentiveProductiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentiveProductiveRoutingModule { }
