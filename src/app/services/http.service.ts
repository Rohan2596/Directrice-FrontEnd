import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', '*')
};


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseUrl=environment.userApi

  constructor(private http:HttpClient) { }

  public postRequest(url: any, data: any): any {
    return this.http.post(this.baseUrl + url, data);
  }


}
