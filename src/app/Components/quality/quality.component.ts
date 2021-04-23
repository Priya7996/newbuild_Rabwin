import { Component, OnInit,Inject } from '@angular/core';
import { NavbarService } from '../../Nav/navbar.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReportService } from '../../Service/app/report.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {
  login: FormGroup;
  daterangepicker:any;
  module_response:any;
  shift_response:any;
  get_report1:any;
  reportblock:any;
  mac_response:any;
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
  new_date: string;
  new_date1: string;
  status: string;
  get_report: any;
  first_loading: any;
  constructor(private datepipe: DatePipe,private service: ReportService,public dialog: MatDialog,private nav: NavbarService, private fb: FormBuilder,) {
    this.nav.show()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Add, {
      width: '500px',
      data: { new: 'new' }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(Edit, {
      width: '500px',
      data: { new: 'new' }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  openDialog3(): void {
    const dialogRef = this.dialog.open(Sedit, {
      width: '500px',
      data: { new: 'new' }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(Sadd, {
      width: '500px',
      data: { new: 'new' }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getsplit(val){
    
    this.reportblock = val;
    
    console.log(this.reportblock)
    

    this.service.line(this.reportblock).subscribe(res => {
      this.mac_response=res;
      console.log(this.mac_response[0]);
      this.login.patchValue({
        machine_name: this.mac_response[0],
      })

   
      })
    }

  ngOnInit() {

    this.login = this.fb.group({
      line:["",Validators.required],
      machine_name:["",Validators.required],
      shift_num:["",Validators.required],

      date:["",Validators.required],

    })


    this.service.getmodule().subscribe(res => {
      this.module_response = res;
      console.log(this.module_response);
      this.login.patchValue({
        line: this.module_response[0],

      })
      this.service.line(this.module_response[0]).subscribe(res => {
        this.mac_response=res;
        // let data =  this.mac_response;
        // console.log(data)
        console.log(this.mac_response);
        this.login.patchValue({
          machine_name: this.mac_response[0],
        })
        this.service.getshift().subscribe(res => {
          this.shift_response = res;
          this.login.patchValue({
            shift_num: this.shift_response[0].shift_no,
          })
          this.service.first_page_loading().subscribe(res => {
            this.first_loading = res;
            console.log(res)
            console.log(this.first_loading['from_date'] )

            this.login.patchValue({
              // date : [this.first_loading]
              date : this.first_loading['from_date']

            })
            this.logintest('true');

          })
    })
    })
 
  
    })
  }

  logintest(s) {
    this.status = s;

    console.log(this.login.value.date);
    if (this.status == 'true') {
      this.login.value.date = new DatePipe('en-US').transform(this.login.value.date, 'MM/dd/yyyy');

      let register = {
        "machine_name": this.login.value.machine_name,
        "shift_num": this.login.value.shift_num,
        "date": this.login.value.date + '-' + this.login.value.date
      }
      console.log(register);
      this.service.overall_report_ing(register).subscribe(res => {
        this.get_report = res;
        this.get_report1 = res[0].route_card_report;
        console.log(this.get_report1);

    

      })
    } 
  }

}

 
@Component({
  selector: 'add-page',
  templateUrl: 'add.html',
  styleUrls: ['./quality.component.scss']


})
export class Add {
  


  constructor(public dialogRef: MatDialogRef<Add>, @Inject(MAT_DIALOG_DATA) public data: Add, private fb: FormBuilder,) {
  }

 

  ngOnInit() {
    
  }
 

  }


  @Component({
    selector: 'edit-page',
    templateUrl: 'edit.html',
    styleUrls: ['./quality.component.scss']
  
  
  })
  export class Edit {
    
  
  
    constructor(public dialogRef: MatDialogRef<Edit>, @Inject(MAT_DIALOG_DATA) public data: Edit, private fb: FormBuilder,) {
    }
  
   
  
    ngOnInit() {
      
    }
   
  
    }
    @Component({
      selector: 'sedit-page',
      templateUrl: 'sedit.html',
      styleUrls: ['./quality.component.scss']
    
    
    })
    export class Sedit {
      
    
    
      constructor(public dialogRef: MatDialogRef<Sedit>, @Inject(MAT_DIALOG_DATA) public data: Sedit, private fb: FormBuilder,) {
      }
    
     
    
      ngOnInit() {
        
      }
     
    
      }

      @Component({
        selector: 'sadd-page',
        templateUrl: 'sadd.html',
        styleUrls: ['./quality.component.scss']
      
      
      })
      export class Sadd {
        
      
      
        constructor(public dialogRef: MatDialogRef<Sadd>, @Inject(MAT_DIALOG_DATA) public data: Sadd, private fb: FormBuilder,) {
        }
      
       
      
        ngOnInit() {
          
        }
       
      
        }
    
    