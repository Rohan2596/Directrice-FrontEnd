import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  toLogin(login:any){
    return this.http.postRequest('/authenticate',login);

  }
  toRegister(register:any){
    return this.http.postRequest('/register',register);
  }
}
