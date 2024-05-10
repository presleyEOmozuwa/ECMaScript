import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { ILoginData } from '../interfaces/login.interface';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import * as fromLogin from '../store/actions/login.actions';
import { LoginService } from './login.service';
import { NgxSpinnerService } from "ngx-spinner";
import { IExternalLogin } from '../interfaces/external.interface';
import { IUser } from '../interfaces/current.interface';
import { AlertService } from '@full-fledged/alerts';
import { IMessages } from '../interfaces/messages.interface';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  loginForm: FormGroup;
    messages: IMessages = {
    isEmailError: null,
    isPasswordError: null
  }
  data:any = null;
  
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private store: Store<AppState>, private spinner: NgxSpinnerService, private alertService: AlertService) { }

  ngOnInit(): void 
  { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      rememberMe: [false, []]
    })
  }

  /* onSubmit(): void
  {
    const credentials: ILoginData = this.loginForm.value;
    this.store.dispatch(fromLogin.loginPage({ payload: credentials }));
  }
 */
  onSubmit(): void
  {
    const credentials: ILoginData = this.loginForm.value;
    const observer: any = {
      next: (val: IUser) => {
          console.log(val);
          if(val.isAuthenticated == true){
            this.router.navigate(['/dashboard']);
          }
          
      },
      error: (res: any) => {
        console.log(res);
        if(res.error.isEmailInvalid == true){
          this.messages.isEmailError = res.error.isEmailInvalid;
          /* this.alertService.danger("Invalid Email or Password"); */
        }
        if(res.error.isPasswordInvalid == true){
          this.messages.isPasswordError = res.error.isPasswordInvalid;
          /* this.alertService.danger("Invalid Email or Password"); */
        }
      }
    }
    const obs = of([1, 2, 3, 4]);
    let result: number[];
    obs.subscribe(val => {
      result = val;
      console.log(result);
    });
    
    this.loginService.login(credentials).subscribe(observer)
    
  }



  /* loginWithGoogle(): void
  {
    this.loginService.signInWithGoogle()
    .then((user: SocialUser) =>
      {
        this.loginService.sendGoogleTokenToServer(user.provider, user.idToken).subscribe(data =>
        {
          console.log(data);
          this.router.navigate(['/dashboard']);
        })
        console.log(user);
      })
      .catch(error =>
      {
        console.log(error);
      })
  } */

  loginWithGoogle(): void
  {
    this.loginService.signInWithGoogle()
    .then((user: SocialUser) =>
      {
        this.store.dispatch(fromLogin.loginView({provider: user.provider, idToken: user.idToken}));
        this.router.navigate(['/dashboard']);
      })
  }


  get g(): { [key: string]: AbstractControl } 
  {
    return this.loginForm.controls;
  }
}
