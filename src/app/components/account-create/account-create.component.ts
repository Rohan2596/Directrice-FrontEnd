import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {
  screen = 1;


  constructor(private router:Router) { }

  ngOnInit() {
  }
  next(count){
    this.screen=count
    if(count==4){
      this.router.navigate(['/dashboard'])
    }
  
  
  }

}
