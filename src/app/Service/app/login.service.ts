import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  signin(login):Observable<any> {
      return this.http.post('login', login);
  }
  machine_count():Observable<any> {
    return this.http.get('machine_count')
  }

  true():Observable<any> {
    return this.http.get('check_status')
  }

  geto():Observable<any> {
    return this.http.get('get_user')
  }

  // forgot(params):Observable<any> {
  //   return this.http.get('sessions/forgot_pwd='+params)
  // }
}
