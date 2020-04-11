import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {

  }

  register(){
    this.router.navigate(['/login'])
    

  }
  toLogin(){
    this.router.navigate(['/login'])
  }

}
