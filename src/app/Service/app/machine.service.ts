import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) { }

  
  machine_get(): Observable<any> {
    return this.http.get('machines');
  }
  lines(data): Observable<any> {
    console.log(data)
    return this.http.post('machine_update', data);
  }
  getsetting(machine):Observable<any> {
    return this.http.get('notification_setting?machine=' + machine);
  }
  updateNotification(data): Observable<any> {
    return this.http.put('update_notification', data);
  }

  addNotification(data): Observable<any> {
    return this.http.post('add_notification_settings', data);
  }

  statusUpdate(params):Observable<any> {
    return this.http.get('change_status',params);
  }
}
