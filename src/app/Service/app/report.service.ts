import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  // shift_create(data: any):Observable<any> {
  //   return this.http.post('shifts', data);
  // }
  // shift_get(pageNo: string | number)192.168.0.237:3000/api/v1/machine_list {
  //   return this.http.get('shifts?page='+pageNo);
  // }
  // shift_put(data: any, id: any):Observable<any> {
  //   return this.http.put('shifts/' + id, data);
  // }
  // shift_delete(id: any) {
  //   return this.http.delete('shifts/' + id);
  // }
  getmachines():Observable<any>{
     return this.http.get('machine_list')
  }
  getshift():Observable<any>{
    return this.http.get('shifts')
  }
  overall_report(register):Observable<any>{
    return this.http.get('overall_report?machine_name=' + register.machine_name +'&&shift_num=' +register.shift_num +'&&from_date='+ register.date )
  }
  first_page_loading():Observable<any>{
    return this.http.get('previous_shift')
  }

}


// cycle_start_to_start(register):Observable<any>{
//   return this.http.get('cycle_start_to_start?machine_id=' + register.machine_id + '&&shift_id=' + register.shift_id + '&&tenant_id=' + register.tenant_id + '&&date=' + register.date )
// }
// 192.168.0.237:4000/api/v1/overall_report?from_date=20-2-2020&&to_date=28-2-2020&&machine_name=machine2&&shift_num