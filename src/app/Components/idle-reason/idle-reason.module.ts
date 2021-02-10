import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { SharedModule } from '../shared/shared.module';
    import { Routes, RouterModule } from '@angular/router';
    import { IdleReasonComponent } from './idle-reason.component';
   import { DatePipe } from '@angular/common';
    
   const routes: Routes = [{ path: '', component: IdleReasonComponent }];
  
    @NgModule({
      declarations: [IdleReasonComponent],
     imports: [RouterModule.forChild(routes),
      CommonModule,SharedModule,
     ],
    providers: [
       DatePipe
      ]
    })
   export class IdleReasonModule { }