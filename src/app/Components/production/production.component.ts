  
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductionService } from '../../Service/app/production.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {
    startDate = new Date(2020, 0, 1);

  // animal: string;
  // name: string;
  type: any;
  myLoader = false;
  edit:any;acept:any;
  new_date:any;
  machine_response: any;
  shift_response: any;
  login: FormGroup;
  get_report: any;
  first_loading: any;
  status: string;
  pageNo: any;
  shift_num:any;
  new_date1: any;
  accept:any;
  date:any;
  marvel:any;
  reject:any;
  register:any;
  last:any;
  vvalue:any;
  total_count = 0;
  constructor(private toast:ToastrService,private datepipe: DatePipe, private service: ProductionService,  private fb: FormBuilder) {

    console.log(localStorage.getItem('machine_name'))
    let name = localStorage.getItem('machine_name');

    this.marvel = localStorage.getItem('machine_name');
    console.log(this.marvel)

    this.myLoader = true;
    this.pageNo =1;
   this.service.namakkal(this.marvel,this.pageNo).subscribe(res =>{
   this.last = res.parts;
   this.myLoader = false;

  console.log( this.last)
   this.edit = res.parts.L1Name;
   console.log(this.edit);
   this.total_count = res.count;
   });


   
  }
  pageEvent(e){
   console.log(e);
    this.pageNo = e.pageIndex+1;
    this.myLoader = true;
    this.service.namakkal(this.marvel,this.pageNo).subscribe( res => {
      this.last = res.parts;
   this.myLoader = false;

  console.log( this.last)
   this.edit = res.parts.L1Name;
   console.log(this.edit);
   this.total_count = res.count;

    })

  }
  
    
  

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewDialog, {
  //     // width: '250px',
  //     // data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // this.animal = result;
  //   });
  // } machine_name: ["",]

  ngOnInit() {
    this.login = this.fb.group({
      
      shift_num: [""],
      date: [""],
      status: ["nil"]
    })
    this.service.namakkal(this.marvel,this.pageNo).subscribe(res =>{
      this.last = res.parts;
      this.myLoader = false;
   
     console.log( this.last)
      this.edit = res.parts.L1Name;
      console.log(this.edit);
      this.total_count = res.count;
      });
    this.service.getmachines().subscribe(res => {
      this.machine_response = res;
      
    
      this.service.getshift().subscribe(res => {
        this.shift_response = res;
        this.login.patchValue({
          shift_num: this.shift_response.shift_no,
        }) 
        //  this.logintest('true');
        // this.service.first_page_loading().subscribe(res => {
        //   this.first_loading = res;
        //   this.login.patchValue({
        //     date : [this.first_loading['from_date'],this.first_loading['to_date']]
        //   })
          // this.minDate = this.first_loading['from_date']
          // this.maxDate = this.first_loading['to_date']
          // this.logintest('true');
          this.logintest('s');

        })
      })
    
  }
 

  synclox(){
    this.marvel = localStorage.getItem('machine_name');
    console.log(this.marvel);
    this.service.syncing(this.marvel).subscribe(res =>{ 
      console.log(res);
      Swal.fire(res['message'])
      location.reload()
       this.last = res;
      })

  }
  logintest(s) {
    this.status = s;
    this.myLoader = true;
    this.pageNo =1;

    let name = localStorage.getItem('machine_name');
    console.log(name)
    console.log(localStorage.getItem('machine'))
    // this.maxDate = this.datepipe.transform(this.maxDate);
    // console.log(this.minDate)
    console.log(this.login.value)
    if (this.status == 'true') {
      // this.new_date = new DatePipe('en-US').transform(this.login.value.date[0], 'MM/dd/yyyy');
      this.new_date = new DatePipe('en-US').transform(this.login.value.date, 'dd/MM/yyyy');
      let register = {
        "machine":name,
        "shift_num": this.login.value.shift_num,
        "date": this.new_date,
        "status": this.login.value.status
      }
      this.register = register;
      localStorage.setItem('shift_num',this.login.value.shift_num);
      localStorage.setItem('date',this.new_date);
      localStorage.setItem('status',this.login.value.status)





      this.service.overall_report(register,this.pageNo).subscribe(res => {
        this.myLoader = false;
        this.last = [];
        this.get_report = res.parts; 
        // this.myLoader = true;
        this.edit = res.parts.is_verified;  
        console.log(this.edit);  
        console.log(this.last)
        this.total_count = res.count;

      })

   
    }

  }

  pageEvents(e){
    console.log(this.register);
    this.myLoader = false;
   console.log(e);
    this.pageNo = e.pageIndex+1;
    this.service.overall_report(this.register,this.pageNo).subscribe( res => {
      this.get_report = res.parts; 
      // this.myLoader = true;
      this.edit = res.parts.is_verified;  
      console.log(this.edit);  
      console.log(this.last)
      this.total_count = res.count;
    })
  }
  edit_count(id,verified,acept,lock){
    console.log(id,verified,acept);
    this.vvalue = acept;
    console.log(this.vvalue)
   if (acept === 1) {
   

    let data = {'production_result_id':id,'accept_count': 2}
    console.log(data);
    
    
    this.service.accept1(data).subscribe(res =>{
      console.log(res);
      if(res === true){
        this.toast.success("Reject Count updated successfully")
      }
      else
      {
         this.toast.success("Reject Count Failed")
      }
      // this.ngOnInit();
      this.service.overall_report(this.register,this.pageNo).subscribe(res => {
        this.myLoader = false;
        this.last = [];
        this.get_report = res.parts; 
        // this.myLoader = true;
        this.edit = res.parts.is_verified;  
        console.log(this.edit);  
        console.log(this.last)
        this.total_count = res.count;

      })
    })
   
  } else {
   
    let data = {'production_result_id':id,'accept_count': 1}
    console.log(data);
    
    this.service.reject1(data).subscribe(res =>{
      console.log(res);
      if(res === true){
        this.toast.success("Accept Count updated successfully")
      }
      else
      {
         this.toast.success("Accept Count Failed")
      }
      
      // this.ngOnInit();
      this.service.overall_report(this.register,this.pageNo).subscribe(res => {
        this.myLoader = false;
        this.last = [];
        this.get_report = res.parts; 
        // this.myLoader = true;
        this.edit = res.parts.is_verified;  
        console.log(this.edit);  
        console.log(this.last)
        this.total_count = res.count;

      })
      // location.reload();


    })
   
  }
   this.acept = this.reject;
   console.log(this.reject)
   this.acept = 2;
   console.log(this.acept)
  }
  accept_count(id){
    this.accept = 1;
    
    console.log(id,this.accept );
    let data = {'production_result_id':id,'accept_count': this.accept}

    this.service.accept(data).subscribe(res =>{
      console.log(res);
      if(res === true){
        this.toast.success("Accept Count updated successfully")
      }
      else
      {
         this.toast.success("Accept Count Failed")
      }
    })
    this.service.overall_report(this.register,this.pageNo).subscribe(res => {
      this.myLoader = false;
      this.last = [];
      this.get_report = res.parts; 
      // this.myLoader = true;
      this.edit = res.parts.is_verified;  
      console.log(this.edit);  
      console.log(this.last)
      this.total_count = res.count;

    })
  }
  reject_count(id){
   
    this.accept = 2;
    console.log(id,this.accept );
    let data = {'production_result_id':id,'accept_count': this.accept }

    this.service.reject(data).subscribe(res =>{
      console.log(res);
      if(res === true){
        this.toast.success("Reject Count updated successfully")
      }
      else
      {
         this.toast.success("Reject Count Failed")
      }
    })
    this.service.overall_report(this.register,this.pageNo).subscribe(res => {
      this.myLoader = false;
      this.last = [];
      this.get_report = res.parts; 
      // this.myLoader = true;
      this.edit = res.parts.is_verified;  
      console.log(this.edit);  
      console.log(this.last)
      this.total_count = res.count;

    })
  }

  acceptt_count(id){
    this.accept = 1;
    
    console.log(id,this.accept );
    let data = {'production_result_id':id,'accept_count': this.accept}

    this.service.accept(data).subscribe(res =>{
      console.log(res);
      if(res === true){
        this.toast.success("Accept Count updated successfully")
      }
      else
      {
         this.toast.success("Accept Count Failed")
      }
    })

    this.service.namakkal(this.marvel,this.pageNo).subscribe(res =>{
      this.last = res.parts;
      this.myLoader = false;
   
     console.log( this.last)
      this.edit = res.parts.L1Name;
      console.log(this.edit);
      this.total_count = res.count;
      });
    
  }
  rejectt_count(id){
   
    this.accept = 2;
    console.log(id,this.accept );
    let data = {'production_result_id':id,'accept_count': this.accept }

    this.service.reject(data).subscribe(res =>{
      console.log(res);
      if(res === true){
        this.toast.success("Reject Count updated successfully")
      }
      else
      {
         this.toast.success("Reject Count Failed")
      }
    })
    this.service.namakkal(this.marvel,this.pageNo).subscribe(res =>{
      this.last = res.parts;
      this.myLoader = false;
   
     console.log( this.last)
      this.edit = res.parts.L1Name;
      console.log(this.edit);
      this.total_count = res.count;
      });
  }

}
