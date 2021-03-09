import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';
import { IdleReasonService } from '../../Service/app/idle-reason.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ExportService } from '../shared/export.service';
import Swal from 'sweetalert2';    
import { MatSort,MatTableDataSource,} from '@angular/material';

declare var gtag;
 
   @Component({
     selector: 'app-idle-reason',
      templateUrl: './idle-reason.component.html', 
   styleUrls: ['./idle-reason.component.scss']
    }) 
    export class IdleReasonComponent implements OnInit {

      displayedColumns: string[] = ['position', 'date', 'line', 'machine_name','operator','availability','perfomance','quality','oee'];
  dataSource = new MatTableDataSource();
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
     pageNo: any;
      page_size= 10;     
register:any;
startDate:any;
       searchText:any;
       pageSizeOptions:any;      
       total_count: any;
      login: FormGroup;
     get_report: any;
     report: any;
      first_loading: any;
     daterangepicker:any;
    
    status: string;
    myLoader = false;
      export_excel: any[] = [];
      new_date: string;
      new_date1: any;
      constructor(private nav:NavbarService,private datePipe: DatePipe,private service:IdleReasonService,private fb:FormBuilder,private exportService: ExportService  ) { 
        this.nav.show()
      }
        ngOnInit() {

          
gtag('config', 'G-JRVTCZ20DE');
console.log(gtag);

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
                   // this.minDate = this.first_loading['from_date'][m
                 // this.maxDate = this.first_loading['to_date'][m
               
               // this.minDate = this.first_loading['from_date'][m
             // this.maxDate = this.first_loading['to_date'][m
               this.logintest('true');
            })
            })
       })
      }
    export(){
   let register = {
        "machine_name": this.login.value.machine_name,
        "shift_num": this.login.value.shift_num,
        // "date": this.new_date + '-' + this.new_date1
        "date" : this.login.value.date
      }
  this.service.overall_report(register).subscribe(res => {
    // this.myLoader = false;
  this.service.overall_report(register).subscribe(res => {
    // this.myLoader = false;
    this.get_report = res;
    console.log(this.get_report);
    if(this.get_report.length==0){
      Swal.fire('Exporting!, No Data Found')
    }else{
    for(var i=0;i<this.get_report.length;i++){
      this.export_excel.push({
         "S.No": i+1,
         "Date": this.get_report[i].date || '---',
         "Shift": this.get_report[i].shift_num || '---',
         "Machine Name":this.get_report[i].machine_name || '---',
         "Program Number":this.get_report[i].program_number || '---',
         "Result Accumulative": this.get_report[i].productresult_accumulate || '---',
         "Product Name": this.get_report[i].productname || '---',
         "Product Result": this.get_report[i].productresult || '---',
         "Accept Count": this.get_report[i].accept_count || '---',
         "Reject Count": this.get_report[i].reject_count || '---', 
         "Start Time": this.get_report[i].part_start_time || '---',
         "End Time": this.get_report[i].part_start_time || '---',
                 });
    }
      this.exportService.exportAsExcelFile(this.export_excel, 'Report Details');
  }
  })

 })
}

     logintest(s) {

          this.pageNo =1;
        this.status = s;
        this.myLoader = true;

     // this.maxDate = this.datepipe.transform(this.maxDate);
       console.log(this.minDate)
    console.log(this.login.value)
       if (this.status == 'true') {
        // this.new_date = new DatePipe('en-US').transform(this.login.value.date[0], 'MM/dd/yyyy');
        // this.new_date1 = new DatePipe('en-US').transform(this.login.value.date, 'MM/dd/yyyy');
        this.new_date = new DatePipe('en-US').transform(this.login.value.date[0], 'MM/dd/yyyy');
        this.new_date1 = new DatePipe('en-US').transform(this.login.value.date[1], 'MM/dd/yyyy');
        let register = {
            "machine_name": this.login.value.machine_name,
           "shift_num": this.login.value.shift_num,
          //  "date": this.new_date + '-' + this.new_date1
          "date":this.new_date + '-' + this.new_date1
        }

                   this.register= register;

      this.service.overall_report(register).subscribe(res => {
      this.myLoader = false;
         this.report = res;
         this.get_report = res;

         this.dataSource = new MatTableDataSource(this.get_report);

      })
    }
}


  pageEvent(e){
    console.log(this.register);
   console.log(e);
    this.pageNo = e.pageIndex+1;
    this.myLoader = true;
    this.service.overall_report(this.register).subscribe( res => {
      console.log(res);
      this.myLoader = false;
      this.get_report = res.parts;
    })
  }
}