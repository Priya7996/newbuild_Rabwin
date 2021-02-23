
  
import { Component, OnInit, Inject } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';
import { ReportService } from '../../Service/app/report.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ExportService } from '../shared/export.service';
import Swal from 'sweetalert2';

declare var gtag;

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  // animal: string;
  // name: string;

  type: any;
  myLoader = false;
  daterangepicker:any;
  export_excel: any[] = [];

  public today: Date = new Date(new Date().toDateString());
  public weekStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString());
  public weekEnd: Date = new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate()
    - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString())
    ;
  public monthStart: Date = new Date(new Date(new Date().setDate(1)).toDateString());
  public monthEnd: Date = this.today;
  public lastStart: Date = new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString());
  public lastEnd: Date = this.today;
  public yearStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - 365)).toDateString());
  public yearEnd: Date = this.today;
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public maxDate: Object = new Date();
  public minDate: Object = new Date(new Date().setMonth(new Date().getMonth() - 1));
  machine_response: any;
  shift_response: any;
  login: FormGroup;
  get_report: any;
  first_loading: any;
  status: string;
  new_date: string;
  new_date1: any;
  operaid:any;
  opera:any;
  constructor(private datepipe: DatePipe, private nav: NavbarService, private service: ReportService, public dialog: MatDialog, private fb: FormBuilder, private exportService: ExportService) {
    this.nav.show()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewDialog, {
   
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  } machine_name: ["",]

  ngOnInit() {


    this.login = this.fb.group({
      machine_name: [""],
      shift_num: [""],
      date: [""],

    })

    this.service.getmachines().subscribe(res => {
      this.machine_response = res;
      this.login.patchValue({
        machine_name: this.machine_response[0],
      })
      this.service.getshift().subscribe(res => {
        this.shift_response = res;
        this.login.patchValue({
          shift_num: this.shift_response[0].shift_no,
        })
        this.service.first_page_loading().subscribe(res => {
          this.first_loading = res;
          this.login.patchValue({
            date : [this.first_loading['from_date'],this.first_loading['to_date']]
          })


          // this.new_date = new DatePipe('en-US').transform(this.first_loading['from_date'], 
          // 'dd/MM/yyyy');
          // this.new_date1 = new DatePipe('en-US').transform(this.first_loading['to_date'], 
          // 'dd/MM/yyyy');
          // this.login.patchValue({
          //   date : [  this.new_date,  this.new_date1]
          // })
          // this.minDate = this.first_loading['from_date']
          // this.maxDate = this.first_loading['to_date']
          this.logintest('true');
        })
      })
    })

    // for (let i = 0; i <= 25; i++) {
    //   this.login.push({machine_name: `machine_name${i}`, shift_num: `shift_num${i}`,
    //   date: `date${i}`, });
    // }
  }
  export(){
   let register = {
        "machine_name": this.login.value.machine_name,
        "shift_num": this.login.value.shift_num,
        "date": this.new_date + '-' + this.new_date1
      }

      
  this.service.overall_report(register).subscribe(res => {
    this.myLoader = false;
    this.get_report = res;
    if(this.get_report.length==0){
      Swal.fire('Exporting!, No Data Found') 
    }else{
    for(var i=0;i<this.get_report.length;i++){
         for(let j=0; j<this.get_report[i].operator.length;j++){
          for(let k=0; k<this.get_report[i].operator_id.length;k++){
            for(let m=0; m<this.get_report[i].root_card.length;m++){
             this.opera = this.get_report[i].operator[j];
             this.operaid = this.get_report[i].operator_id[k];

     
    
      this.export_excel.push({
         "S.No": i+1,
         "Date": this.get_report[i].date || '---',
         "Line": this.get_report[i].line || '---',
         "Machine Name":this.get_report[i].machine_name || '---',
         "Shift": this.get_report[i].shift_num || '---',
         "Operator Name": this.opera || '---',
         "Operator ID": this.operaid || '---',
         "Route Card Number": this.get_report[i].root_card[m] || '---',
         "Target": this.get_report[i].target,
         "Actual Parts Produced": this.get_report[i].actual,
         "Efficiency": this.get_report[i].efficiency || '---',
         "Utilization": this.get_report[i].utilisation || '---',
         "Run Time (in mins)": this.get_report[i].run_time || '---',
         "Setup Idle (in mins)": this.get_report[i].idle_time || '---',
         "Alarm Time": this.get_report[i].alarm_time || '---',
         "Non Utilized Time": this.get_report[i].disconnect || '---',
          "Duration": this.get_report[i].duration || '---',


      });
    }
      this.exportService.exportAsExcelFile(this.export_excel, 'Report Details');
  }
}
    }
    }
  })

 }
  logintest(s) {
    this.status = s;
    this.myLoader = true;

  
    if (this.status == 'true') {
      this.new_date = new DatePipe('en-US').transform(this.login.value.date[0], 'MM/dd/yyyy');
      this.new_date1 = new DatePipe('en-US').transform(this.login.value.date[1], 'MM/dd/yyyy');
      let register = {
        "machine_name": this.login.value.machine_name,
        "shift_num": this.login.value.shift_num,
        "date": this.new_date + '-' + this.new_date1
      }

      this.service.overall_report(register).subscribe(res => {
        this.myLoader = false;
        this.get_report = res;
      })
    }
  }
}
@Component({
  selector: 'report-component-dialog',
  templateUrl: 'report.model.html',
})
export class DialogOverviewDialog {

  constructor(public dialogRef: MatDialogRef<DialogOverviewDialog>) { }
  // @Inject(MAT_DIALOG_DATA) public data: DialogData

  onNoClick(): void {
    this.dialogRef.close();
  }

}
