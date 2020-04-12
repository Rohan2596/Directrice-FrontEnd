import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
const registerDetails={
userName:'',
emailId:'',
password:''
  
};


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(
    private router:Router,
    private userService:UserService
    ) { }

  ngOnInit() {

  }

  username=new FormControl(registerDetails.userName);
  email = new FormControl(registerDetails.emailId)
  password=new FormControl(registerDetails.password);


  register(){
    console.log(this.username.value,this.email.value,this.password.value);
    registerDetails.emailId=this.email.value;
    registerDetails.password=this.password.value;
    registerDetails.userName=this.username.value;

    let registerDTO=
        {
          "emailId": registerDetails.emailId,
          "password": registerDetails.password,
          "userName": registerDetails.userName
                }
      
    this.userService.toRegister(registerDTO).subscribe(
      response=>{
        console.log("Response" + JSON.stringify(response));
        
      }
    )

    // this.router.navigate(['/login'])
    

  }
  toLogin(){
    this.router.navigate(['/login'])
  }

}
