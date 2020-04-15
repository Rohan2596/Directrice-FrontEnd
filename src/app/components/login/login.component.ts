import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { UtilityService } from 'src/app/utility/utility.service';

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

  email=new FormControl(loginDeatils.email,[Validators.required,
    Validators.email,
    Validators.pattern('^([a-zA-Z0-9][.-]?)+@([a-zA-Z0-9]+[.-]?)*[a-zA-Z0-9][.][a-zA-Z]{2,3}$')]);
  password=new FormControl(loginDeatils.password,[Validators.required, Validators.minLength(6), Validators.maxLength(8),this.noWhiteSpaceValidators]);
  responseData:String;


  constructor(private router:Router,
    private userService:UserService,
    private utilityService:UtilityService) { }

  ngOnInit() {
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'EmailId is Required.' :
      this.email.hasError('email') ? 'Enter Valid EmailId.' :
        this.email.hasError('pattern') ? 'Enter Valid EmailId.' :
          '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Password is Required.' :
      this.password.hasError('minlength') ? 'Min Character for Password is 6.' :
        this.password.hasError('maxlength') ? 'Max Character for Password is 8.' :
          '';
  }
  public noWhiteSpaceValidators(control: FormControl) {

    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  login(){
    console.log(this.email.value,this.password.value);
    let loginDTO={
      "emailId": this.email.value,
      "password": this.password.value
    }
    this.userService.toLogin(loginDTO).subscribe(
      response => {
        this.responseData=response
        console.log("Response" + JSON.stringify(response),String((response as any).message));
        localStorage.setItem('token', String((response as any).data));
        this.utilityService.successHandler(String((response as any).message));
        this.router.navigate(['/dashboard'])
      },
      (error)=>{
        console.log(error);
        this.utilityService.errorHandler(error.error.message)


      }
      
    )
    // if(this.responseData.message)


  
  }

  toRegister(){
    this.router.navigate(['/register'])
  }

}
