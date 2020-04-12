import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { FormControl } from '@angular/forms';

const loginDeatils={
  email:'',
  password:''
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email=new FormControl(loginDeatils.email);
  password=new FormControl(loginDeatils.password);


  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    
    this.router.navigate(['/dashboard'])
  }

  toRegister(){
    this.router.navigate(['/register'])
  }

}
