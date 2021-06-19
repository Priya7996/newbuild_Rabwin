import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { Component, OnInit,OnChanges,SimpleChanges,Inject,Input} from '@angular/core';
import { LoginService } from '../../Service/app/login.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { NavbarService } from '../navbar.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  count_machine:any;
  show1: boolean;
  @Input()navStatus: boolean;
  available:any;
  show2: boolean;
  drawer:any;
  tenant_name:any;
  sidebarnavigate:any;
  // private nav:any;
  // nav:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  rolename: string;

  constructor(private servie:LoginService,public nav: NavbarService, private route: Router, private breakpointObserver: BreakpointObserver) {
    this.nav.hide();

   }

  ngOnInit() {

    this.tenant_name = localStorage.getItem('ten_name');

    this.servie.true().pipe(untilDestroyed(this)).subscribe(res=>{
      localStorage.setItem('sign', res);


    })

    this.rolename = localStorage.getItem('role_name');
  
  }


  shift(){
    this.servie.machine_count().pipe(untilDestroyed(this)).subscribe(res=>{
      this.count_machine = res.shift_data;
      if(this.count_machine === false){
          Swal.fire({
            title: 'Register Shift',
            // type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.value) {
              localStorage.clear();
              this.route.navigateByUrl('/shift');
            }
          });

      }
      else{
        this.route.navigateByUrl('/rabwin_dashboard');

      }

    })
  
   

   
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.navStatus.currentValue){
      this.tenant_name = localStorage.getItem('ten_name');

      this.rolename = localStorage.getItem('role_name');
      this.available =  localStorage.getItem('disable');

    }

} 
 view() {
    this.show2 = !this.show2
  }
  toggle() {
    this.show1 = !this.show1
  }
  // close() {
  //   Swal.fire({
  //     title: 'Are you sure want to logout?',
  //     // icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes',
  //     cancelButtonText: 'No'
  //   }).then((result) => {
  //     if (result) {
  //       localStorage.clear();
  //       this.route.navigateByUrl('');
  //     }
  //   });
  // }

  refresh(){
    location.reload();
  }

  ngOnDestroy() {}
  close() {
    Swal.fire({
      title: 'Are you sure want to logout?',
      // type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this.route.navigateByUrl('');
      }
    });
  }
}

