import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class IdleReasonService {
    pageNo: any;
 
  constructor(private http:HttpClient,) { }

  getmachines():Observable<any>{
    return this.http.get('machine_list')
 }
 getshift():Observable<any>{
   return this.http.get('shifts')
 }
 overall_report(register,pageNo):Observable<any>{

 
   return this.http.get('production_part_report?machine_name=' + register.machine_name +'&&shift_num=' +register.shift_num +'&&from_date='+ register.date +'&&page='+pageNo+'&&per_page='+10 )
 }
 first_page_loading():Observable<any>{
   return this.http.get('previous_shift')
 }

  
}
