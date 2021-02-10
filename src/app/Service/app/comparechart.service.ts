import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComparechartService {

  constructor(private http: HttpClient) {

    
   }
   getmachines():Observable<any>{
    return this.http.get('machine_list')
 }
 getshift():Observable<any>{
   return this.http.get('shifts')
 }
 machine_get():Observable<any>{
   return this.http.get('machine_list')
 }
 shift_get():Observable<any>{
  return this.http.get('shifts')
}
 overall_compare(register):Observable<any>{
  return this.http.get('compare_report?machine_name=' + register.machine_name +'&&shift_num=' +register.shift_num +'&&from_date='+ register.date)
}

compare_chart(value):Observable<any>{
  return this.http.get('compare_report?machine_name=' + value.machine_name +'&&shift_num=' +value.shift_num +'&&from_date='+ value.date)
}
first_page_loading():Observable<any>{
  return this.http.get('previous_shift')
}
right_first_page_loading():Observable<any>{
  return this.http.get('previous_shift')
}
}
// 192.168.0.237:4000/api/v1/compare_report?from_date=20-2-2020&&to_date=28-2-2020&&machine_name=machine2&&shift_num=2