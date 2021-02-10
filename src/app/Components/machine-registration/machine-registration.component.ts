import { Component, OnInit, Inject } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';
import Swal from 'sweetalert2'
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MachineService } from 'src/app/Service/app/machine.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-machine-registration',
  templateUrl: './machine-registration.component.html',
  styleUrls: ['./machine-registration.component.scss']
})
export class MachineRegistrationComponent implements OnInit {

  machine_list: any;
  myLoader = false;
  constructor(private fb: FormBuilder, private nav: NavbarService, public dialog: MatDialog, private machine: MachineService) {
    this.nav.show()
  }


  edit_view(data1) {
    console.log(data1)
    const dialogRef = this.dialog.open(Edit, {
      width: '',
      data: data1

      // data: { serverlist: this.webApi.getServerList() }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  setting_view(data2) {
    console.log(data2)
    const dialogRef = this.dialog.open(Add, {
      width: '400px',
      data: data2

      // data: { serverlist: this.webApi.getServerList() }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.getMachines();
  }
  getMachines() {
    this.myLoader = true;

    this.machine.machine_get().pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res);
      this.myLoader = false;

      this.machine_list = res;
      console.log(this.machine_list)
    })
  }
  delete() {
    Swal.fire('Are you sure want to delete?')
  }
  ngOnDestroy() { }

}



@Component({
  selector: 'edit-page',
  templateUrl: 'edit.html',
  // styleUrls: ['./user-management.component.scss']

})
export class Edit {
  reasonforum: FormGroup;
  id: any;
  edit_data1: any;
  constructor(public dialogRef: MatDialogRef<Edit>, @Inject(MAT_DIALOG_DATA) public data1: Edit, private fb: FormBuilder, private machine: MachineService, private toast: ToastrService) {
    this.edit_data1 = data1;
    this.id = data1.id.$oid;
    console.log(this.id);
    console.log(this.edit_data1)

  }


  ngOnInit() {
    this.reasonforum = this.fb.group({
      machine: [this.edit_data1.L0Name],
      ip: [this.edit_data1.ip],
      line: [this.edit_data1.line],
    })
  }

  submit() {


    let register = {
      "machine": this.reasonforum.value.machine,
      "ip": this.reasonforum.value.ip,
      "line": this.reasonforum.value.line,
      "id": this.id
    }
    console.log(register);
    console.log(this.reasonforum.value)
    this.machine.lines(register).pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res);
      this.toast.success('Updated Successfully')
      this.dialogRef.close();


    })
  }

  cancel() {
    this.dialogRef.close();

  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnDestroy() { }
}


@Component({
  selector: 'add-page',
  templateUrl: 'add.html',
  styleUrls: ['./machine-registration.component.scss']

})
export class Add {
  edit_data2: any;
  settingform: FormGroup;
  notificationSettings: any;

  constructor(public dialogRef: MatDialogRef<Edit>, @Inject(MAT_DIALOG_DATA) public data2: Add, private fb: FormBuilder, private machine: MachineService, private toast: ToastrService) {
    this.edit_data2 = data2;
    console.log(this.edit_data2)
  }


  ngOnInit() {
    this.getNotificationSetting();
    this.createSettingForm()
  }
  createSettingForm() {
    this.settingform = this.fb.group({
      machine: [this.edit_data2.L0Name],
      mean_time: ['', [Validators.required, Validators.min(5), Validators.max(60)]],
    })
  }

  getNotificationSetting() {
    this.machine.getsetting(this.edit_data2.L0Name).pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res);
      this.notificationSettings = res;
      this.settingform.patchValue({
        mean_time: this.notificationSettings.data.mean_time
      })
    })
  }

  submit() {
    if (this.settingform.invalid) {
      return;
    }
   
    if (this.notificationSettings.status) {
      let data = {
        "mean_time": this.settingform.value.mean_time,
        "machine": this.settingform.value.machine
      }
      this.machine.updateNotification(data).pipe(untilDestroyed(this)).subscribe(res => {
        this.toast.success('Updated Successfully')
        this.dialogRef.close();
      });
    } else {
      let data = {
        "mean_time": this.settingform.value.mean_time,
        "machine": this.settingform.value.machine,
        "l0_setting_id" : this.edit_data2.id.$oid
      }
      this.machine.addNotification(data).pipe(untilDestroyed(this)).subscribe(res => {
        this.toast.success('Added Successfully')
        this.dialogRef.close();
      });
    }
  }

  status(event) {
    console.log(event.checked);
    let params = {
      "id": this.notificationSettings.data._id.$oid,
    };
    if(event.checked){
      params['status'] = 1;
    } else {
      params['status'] = 0;
    }
    this.machine.statusUpdate({params}).pipe(untilDestroyed(this)).subscribe(res => {
      this.toast.success('Updated Successfully')
    });
  }
  cancel() {
    this.dialogRef.close();

  }
  ngOnDestroy() { }

}




