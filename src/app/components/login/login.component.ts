import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router ,Routes, ActivatedRoute} from '@angular/router';
import {LoginService} from '../../services/login/login.service';
import {FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule, AbstractControl} from "@angular/forms";
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

ngOnInit() {
 this.userFormGroup =this.formbuilder.group({
username : new FormControl("flessent@gov.de", [Validators.required, Validators.minLength(7)]),
password : new FormControl("1234567890",[Validators.required,Validators.minLength(8)] )

 })

 }
userFormGroup!: FormGroup;
submitted:boolean=false;





 username: string='flessent@gov.de';
  password : string='1234567890';
  errorMessage = 'Invalid Credentials';
  successMessage: string='';
  invalidLogin = false;
  loginSuccess = false;

  constructor(
   private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService) {   }


 get form(): { [key: string]: AbstractControl } {
    return this.userFormGroup.controls;
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result:any)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/produkt']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
