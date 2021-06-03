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
    const dialogRef = this.dialog.open(Edit, {
      width: '',
      data: data1

      // data: { serverlist: this.webApi.getServerList() }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  setting_viewnew(data2) {
    const dialogRef = this.dialog.open(Sadd, {
      width: '750px',
      data: data2

      // data: { serverlist: this.webApi.getServerList() }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }


  setting_view_new(data2) {
    const dialogRef = this.dialog.open(Sedit, {
      width: '400px',
      data: data2

      // data: { serverlist: this.webApi.getServerList() }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }


  setting_view(data2) {
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
      this.myLoader = false;

      this.machine_list = res;
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
    this.machine.lines(register).pipe(untilDestroyed(this)).subscribe(res => {
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




@Component({
  selector: 'sadd-page',
  templateUrl: 'sadd.html',
  styleUrls: ['./machine-registration.component.scss']

})
export class Sadd {
  edit_data2: any;
  settingform: FormGroup;
  notificationSettings: any;
  get_load:any;
  get_res:any;
  get_load1:any;
  servlo_id:any;
  get_macro:any;
  myLoader1:any;
  enableEdit:any;
  enableEdit1:any;
  mac_id:any;
  operator_id = new FormControl('', [Validators.required]);
  route_card = new FormControl('', [Validators.required]);
  operation_number = new FormControl('', [Validators.required]);
  idle_reason = new FormControl('', [Validators.required]);
  rejection1 = new FormControl('', [Validators.required]);
  rework = new FormControl('', [Validators.required]);

  rejection = new FormControl('', [Validators.required]);
  spi_id:any;
  constructor(public dialogRef: MatDialogRef<Sadd>, @Inject(MAT_DIALOG_DATA) public data2: Add, private fb: FormBuilder, private machine: MachineService, private toast: ToastrService) {
    this.edit_data2 = data2;

    this.machine.m_get_sett(this.edit_data2.L0Name).pipe(untilDestroyed(this)).subscribe(res => {
  
    })

    this.myLoader1 = true;

    this.machine.man_get_sett(this.edit_data2.L0Name).pipe(untilDestroyed(this)).subscribe(res => {
      console.log(res[2]._id.$oid);
      localStorage.setItem('spindle_id', res[0]._id.$oid);
      localStorage.setItem('servlo_load', res[1]._id.$oid);

      localStorage.setItem('Macro_var', res[2]._id.$oid);

      this.get_load = res[0];
      console.log(this.get_load);
      this.get_load1 = res[1];
      this.get_macro = res[2];
      console.log(this.get_macro);
      this.operator_id = new FormControl(this.get_macro.signal[0].operator_id, [Validators.required]);
      this.route_card = new FormControl(this.get_macro.signal[1].route_card, [Validators.required]);
      this.operation_number = new FormControl(this.get_macro.signal[2].operation_number, [Validators.required]);
      this.idle_reason = new FormControl(this.get_macro.signal[3].idle_reason, [Validators.required]);
      this.rejection1 = new FormControl(this.get_macro.signal[4].rejection, [Validators.required]);
      this.rework = new FormControl(this.get_macro.signal[5].rework, [Validators.required]);
      this.myLoader1 = false;


          })
   
  }

  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
 save(lname){
   console.log(lname)
  this.spi_id = localStorage.getItem('spindle_id');
console.log(this.spi_id);
   console.log(this.rejection.value);
 


   
   let data = {'L1Name': lname, 'id':this.spi_id ,'max':this.rejection.value }
   this.myLoader1 = true;

   let data1 = {"machine_setting":data}
   this.machine.update_spindle(this.spi_id,data1).pipe(untilDestroyed(this)).subscribe(res => {
console.log(res);
this.myLoader1 = false;

Swal.fire('Updated successfully')
this.dialogRef.close();
 
   })
 }
 notify1(val,a_axis,status,mac_name)
 {
   console.log(val,a_axis)
   this.servlo_id = localStorage.getItem('servlo_load');
   console.log(status.checked,mac_name,this.servlo_id);

 
  //  var match = a_axis
  // var vali = val.find( function(item) { return item[0].a_axis == match } );
  // console.log(vali);

  function getMapKeyValue(val, a_axis) {
    if (val.hasOwnProperty(a_axis))
       return { a_axis: a_axis, value: val[a_axis] };
    throw new Error("Invalid map key.");
 }

   let aaxis = {'L1Name': mac_name, 'id':this.servlo_id ,'signal':val}
   let aaxis1 = {"machine_setting":aaxis}

this.machine.update_axis(this.servlo_id,aaxis1).pipe(untilDestroyed(this)).subscribe(res => {

  console.log(res);
})

 }
  toggleShow() {
    this.enableEdit = true;
}

savemacro(macname){
  this.mac_id = localStorage.getItem('Macro_var');

  console.log(macname);
  console.log(this.operator_id.value,this.route_card.value);
  console.log(this.mac_id);


  let donw = {'operator_id':this.operator_id.value,'route_card':this.route_card.value,'operation_number':this.operation_number.value,'idle_reason':this.idle_reason.value,'rejection':this.rejection1.value,'rework':this.rework.value}

  let empty =[]

  let operator_id = {'operator_id':this.operator_id.value}
  let route_card = {'route_card':this.route_card.value}
  let operation_number = {'operation_number':this.operation_number.value}
  let idle_reason = {'idle_reason':this.idle_reason.value}
  let rejection = {'rejection':this.rejection1.value}
  let rework = {'rework':this.rework.value}


  empty.push(operator_id)
  empty.push(route_card)
  empty.push(operation_number)
  empty.push(idle_reason)
  empty.push(rejection)
  empty.push(rework)

  console.log(empty);
  let value =[]
  console.log(donw);
  value.push(donw)
  console.log(value)
  let volk = {"signal":empty}
  let test = {'L1Name': macname, 'id':this.mac_id ,'signal':empty,'value':value}

  console.log(volk);
let testing ={"machine_setting":test}

console.log(testing)
this.myLoader1 = true;

  this.machine.update_macro_axis(this.mac_id,testing).pipe(untilDestroyed(this)).subscribe(res => {

    console.log(res);
    Swal.fire("updated successfully")
    this.dialogRef.close();

  })
  this.myLoader1 = false;

}

toggleShow1() {
  this.enableEdit1 = true;
}
  ngOnInit() {


  }
 



  

  
  cancel() {
    this.dialogRef.close();

  }
  ngOnDestroy() { }

}






@Component({
  selector: 'sedit-page',
  templateUrl: 'sedit.html',
  // styleUrls: ['./user-management.component.scss']

})
export class Sedit {
  settingform: FormGroup;
  id: any;
  edit_data1: any;
  constructor(public dialogRef: MatDialogRef<Sedit>, @Inject(MAT_DIALOG_DATA) public data1: Sedit, private fb: FormBuilder, private machine: MachineService, private toast: ToastrService) {
    this.edit_data1 = data1;
    console.log(this.edit_data1);
    this.id = data1.id.$oid;
   

  }


  ngOnInit() {
    this.settingform = this.fb.group({
      L1Name: [this.edit_data1.L0Name],
      operator_id: ["",],
      route_card: ["",],
      operation_number: ["",],
      idle_reason: ["",],
      rejection: ["",],
      rework: ["",],
   


    })
  }

  submit()
  {
    console.log( this.settingform.value)
    let data = {
      "L1Name": this.settingform.value.L1Name,
      "operator_id": this.settingform.value.operator_id,
      "route_card" : this.settingform.value.route_card,
      "operation_number" : this.settingform.value.operation_number,
      "idle_reason" : this.settingform.value.idle_reason,
      "rejection" : this.settingform.value.rejection,
      "rework" : this.settingform.value.rework,

    }

    this.machine.add_m_set_ing(data).pipe(untilDestroyed(this)).subscribe(res => {
      this.toast.success('Added Successfully')
      this.dialogRef.close();
    });
    console.log(data)
  }
  cancel() {
    this.dialogRef.close();

  }


  ngOnDestroy() { }
}

