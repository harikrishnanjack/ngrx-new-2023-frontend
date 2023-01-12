import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LOGIN } from '../../store/auth.action';
import { IAuthState } from '../../store/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private store:Store<IAuthState>
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email:['babu@gmail.com'],
      password:['12345678*Ab']
    })
  }

  onSubmitLogin(){
    const { email,password } = this.loginForm.value;
    const loginPayload={
      email,
      password
    }
    this.store.dispatch(LOGIN({user:loginPayload}));
  }

}
