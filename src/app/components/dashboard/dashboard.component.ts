import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit() {
  }

home(){
  console.log("HOME");
  
  this.router.navigateByUrl('dashboard');
  }
  wallet(){
    console.log("wallet");

    this.router.navigateByUrl('dashboard/wallet');
  
  }
  chat(){
    console.log("chat");

    this.router.navigateByUrl('dashboard/chat')
  
  }

}
