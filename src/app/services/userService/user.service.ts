import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  login(login:any){
    return this.http.postRequest('/login',login);

  }
  toRegister(register:any){
    return this.http.postRequest('/register',register);
  }
}
