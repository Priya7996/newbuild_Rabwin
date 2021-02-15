import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';
import { ReportIldeService } from '../../Service/app/report-ilde.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ExportService } from '../shared/export.service';
import Swal from 'sweetalert2';    
import { map } from 'rxjs/operators';

declare var gtag;
@Component({
  selector: 'app-report-idle',
  templateUrl: './report-idle.component.html',
  styleUrls: ['./report-idle.component.scss']
})
export class ReportIdleComponent implements OnInit {
  g_report:any;
  time:any;
  loop:any;
  data:any;
  no_data:any;
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
  daterangepicker:any;
  get_duration:any;
  startDate:any;
  status: string;
myLoader = false;
 export_excel: any[] = [];
  new_date: string;
  new_date1: any;

  chart_loop:any;
  constructor(private exportService: ExportService,private nav:NavbarService,private service:ReportIldeService,private fb:FormBuilder  ) { 
    this.nav.show()
  }

   toSeconds = hours => {
    let a = hours.split(':');
    let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    console.log(seconds)
    return seconds;
  }

  toHoursMinutesSeconds = totalSeconds => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    // let result = `${minutes
    //   .toString()
    //   .padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
    // if (!!hours) {
    let result = `${hours.toString()}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    // }
    // console.log(result)
    return result;
  };
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
        // this.login.patchValue({
        //   machine_name: this.machine_response[0],
        // })
        this.service.getshift().subscribe(res => {
          this.shift_response = res;
          // this.login.patchValue({
          //   shift_num: this.shift_response[0].shift_no,
          // })
          // this.service.first_page_loading().subscribe(res => {
          //   this.first_loading = res.from_date;
          //   console.log(this.first_loading)
          //   this.login.patchValue({
          //     date : this.first_loading
          //   })
            // this.minDate = this.first_loading['from_date']
            // this.maxDate = this.first_loading['to_date']
          //   this.logintest('true');
          // })
        })
      })
  }
      export(){
   let register = {
        "machine_name": this.login.value.machine_name,
        "shift_num": this.login.value.shift_num,
        "date": this.new_date + '-' + this.new_date1
      }
  this.service.overall_report(register).subscribe(res => {
    this.get_report = res.tabel;
    if(this.get_report.length==0){
      Swal.fire('Exporting!, No Data Found')
    }else{
    for(var i=0;i<this.get_report.length;i++){
      this.export_excel.push({
         "S.No": i+1,
         "Date": this.get_report[i].date || '---',
         "Shift": this.get_report[i].shift_num || '---',
         "Machine Name": this.get_report[i].machine_name || '---',
         "Reason":this.get_report[i].reason || '---',
         "Start Time": this.get_report[i].start_time || '---',
         "End Time": this.get_report[i].end_time,
         "Duration": this.get_report[i].duration || '---',
         

      });
    }
      this.exportService.exportAsExcelFile(this.export_excel, 'Report Details');
  }
  })

 }  

  logintest(s) {

    
    this.status = s;
    // this.myLoader = true;

    // this.maxDate = this.datepipe.transform(this.maxDate);
    // console.log(this.minDate)
    this.login.value.date = new DatePipe('en-US').transform(this.login.value.date, 'yyyy-MM-dd');
    // console.log(this.login.value.date)

    // if (this.status == 'true') {
    //   this.new_date = new DatePipe('en-US').transform(this.login.value.date[0], 'MM/dd/yyyy');
    //   this.new_date1 = new DatePipe('en-US').transform(this.login.value.date[1], 'MM/dd/yyyy');
      let register = {
        "machine": this.login.value.machine_name,
        "shift": this.login.value.shift_num,
        "date": this.login.value.date
      }
console.log(register);
this.myLoader = true;

      this.service.overall_report(register).subscribe(res => {
        this.myLoader = false;
        console.log(res[0]);
         this.no_data = res;
         this.g_report = res[0];
         this.get_report = res[0].data;



         


        this.get_duration = this.toHoursMinutesSeconds(res[0].total);
        console.log(this.get_duration)
        this.data = []

        for(let i in this.get_report){

          console.log(i);
          this.chart_loop = this.toHoursMinutesSeconds(this.get_report[i].time);
          this.data.push(this.chart_loop);

          console.log(this.chart_loop);
          console.log(this.data) 



        
        }

      })
    
  }

 
}
