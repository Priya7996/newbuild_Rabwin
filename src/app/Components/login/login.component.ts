import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavbarService } from '../../Nav/navbar.service';
import { LoginService } from '../../Service/app/login.service';
import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  hide: boolean = true;
  count_machine: any;
  rolename: any;
  signup:any;
  constructor(public dialog: MatDialog,private fb: FormBuilder, private nav: NavbarService, private service: LoginService, private router: Router) {
    this.nav.hide();
  }
  ngOnInit() {
    this.signup = localStorage.getItem('sign');
    console.log(this.signup);
    // if(this.signup === 'false'){
    //   alert("no signup")

    // }
    // else{
    //   alert("signup")
    // }



    this.service.true().pipe(untilDestroyed(this)).subscribe(res=>{
      this.signup = res;
      console.log(this.signup)
    })


    this.rolename = localStorage.getItem('role_name');
    console.log(this.rolename);
    console.log(this.nav.visible)
    this.login = this.fb.group({
      email: ["", Validators.email],
      password: ["", Validators.required]
    })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '30%',
      height: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  logintest(val) {
    if (this.login.invalid) {
      return;
    }
    console.log(this.rolename)
    console.log(val);
    this.service.signin(val).pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res.access_token);
      localStorage.setItem('tenant_id', res.tenant_id);
      localStorage.setItem('usertype_id', res.usertype_id);
      localStorage.setItem('role_id', res.role_id);
      localStorage.setItem('id', res.id)
      localStorage.setItem('role_name', res.role);
      localStorage.setItem('ten_name', res.tenant);

      console.log(res.tenant, res.role);
      let data = res.role;
      console.log(data)
      if (res === false) {
        Swal.fire('The Username or Password is incorrect')
      } else {
        this.service.machine_count().pipe(untilDestroyed(this)).subscribe(res => {
          console.log(res);
          this.count_machine = res;
          localStorage.setItem('disable', res.shift_data);

          console.log(res.shift_data)
          if (res.shift_data === true && data === 'Admin') {
            // Swal.fire("Welcome admin")
            this.router.navigateByUrl('/andon-dashboard');

          }
          else if (res.shift_data === false && data === 'Admin') {
            Swal.fire("Register Shift")
            this.router.navigateByUrl('/shift');
          }
          else if (res.shift_data === true && data === 'Supervisor') {
            // Swal.fire("Welcome Supervisor")
            this.router.navigateByUrl('/andon-dashboard');
          }
          else if (res.shift_data === false && data === 'Supervisor') {
            Swal.fire("Please Contact Yantra 24x7")
          }
          else if (res.shift_data === true && data === 'QA') {
            // Swal.fire("welcome QA")
            this.router.navigateByUrl('/quality');
          }
          else if (res.shift_data === false && data === 'QA') {
            Swal.fire("Please Contact Yantra 24x7")
          }
        })
      }


    })



  }


  ngOnDestroy() { }


}






@Component({
  selector: 'dialog-page',
  templateUrl: 'dialog.html',
  styleUrls: ['./login.component.scss']

})
export class Dialog {
  test: FormGroup;
  constructor(public dialogRef: MatDialogRef<Dialog>, @Inject(MAT_DIALOG_DATA) public data: any, private service: LoginService, private fb: FormBuilder) {
  }

  
  ngOnInit() {
    this.test = this.fb.group({
      email_id: ["", Validators.email],
      phone_number: ["", Validators.required]

    })
  }
  testform(value) {
    this.test.reset();
    this.service.signin(value).subscribe(res => {
    })

  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

