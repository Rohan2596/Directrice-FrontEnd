import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { UtilityService } from 'src/app/utility/utility.service';
const registerDetails = {
  userName: '',
  emailId: '',
  mobileNumber:'',
  password: ''

};


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
disableRegister=false

  constructor(
    private router: Router,
    private userService: UserService,
    private utilityService:UtilityService
  ) { }

  ngOnInit() {

  }

  username = new FormControl(registerDetails.userName, [Validators.required, Validators.minLength(6), Validators.maxLength(8),this.noWhiteSpaceValidators]);
  email = new FormControl(registerDetails.emailId, [Validators.required,
  Validators.email,
  Validators.pattern('^([a-zA-Z0-9][.-]?)+@([a-zA-Z0-9]+[.-]?)*[a-zA-Z0-9][.][a-zA-Z]{2,3}$')])
  password = new FormControl(registerDetails.password, [Validators.required, Validators.minLength(6), Validators.maxLength(8),this.noWhiteSpaceValidators]);
  mobile=new FormControl(registerDetails.mobileNumber,[Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
  Validators.pattern('^[0-9]{10}$')])

  getErrorMessageUserName() {
    return this.username.hasError('required') ? 'UserName is Required.' :
      this.username.hasError('minlength') ? 'Min Character for UserName is 6.' :
        this.username.hasError('maxlength') ? 'Max Character for UserName is 8.' :
          '';
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

  getErrorMessageMobileNumber(){
    return this.mobile.hasError('required') ? 'Mobile number is Required.' :
    this.mobile.hasError('minlength') ? 'Min Character for Password is 10.' :
      this.mobile.hasError('maxlength') ? 'Max Character for Password is 10.' :
      this.mobile.hasError('pattern') ? 'Enter Valid mobile Number.':
        '';
  }

  public noWhiteSpaceValidators(control: FormControl) {

    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }


  register() {
    console.log(this.username.value, this.email.value, this.password.value);
console.log(this.email.value!="",);
if(this.email.value!="" && this.username.value!="" && this.password.value!=""){
  console.log("EMPTY");
  

    if (!this.password.hasError('minlength') && !this.email.hasError('email') && !this.password.hasError('minlength') ) {
      console.log("resigration");

      registerDetails.emailId = this.email.value;
      registerDetails.password = this.password.value;
      registerDetails.userName = this.username.value;
      registerDetails.mobileNumber=this.mobile.value

      let registerDTO =
      {
        "emailId": registerDetails.emailId,
        "password": registerDetails.password,
        "userName": registerDetails.userName,
        "mobileNumber":registerDetails.mobileNumber
      }

      this.userService.toRegister(registerDTO).subscribe(
        response => {
          this.utilityService.successHandler(String((response as any).message));

          console.log("Response" + JSON.stringify(response));
          

        },
        (error)=>{
          console.log(error);
          this.utilityService.errorHandler(error.error.message)
        }
      )
    }

    // this.router.navigate(['/login'])
  }
  }
  toLogin() {
    this.router.navigate(['/login'])
  }

}
