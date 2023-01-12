import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Register } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUri='http://localhost:3001/auth';

  constructor(
    private http:HttpClient
  ) { }

  logIn(payload:any):Observable<Login>{
    return this.http.post<Login>(this.authUri + '/login',payload);
  }

  register(payload:any):Observable<Register>{

    const formData = new FormData();
    formData.append('picture', payload.picture);
    formData.append('firstName', payload.firstName);
    formData.append('lastName', payload.lastName);
    formData.append('occupation', payload.occupation);
    formData.append('location', payload.location);
    formData.append('email', payload.email);
    formData.append('password', payload.password);
    console.log(formData,'formData');
    return this.http.post<Register>(this.authUri + '/register',formData);
  }

  isLoggedIn(){
    return !!localStorage.getItem('accessToken') ?? '';
  }

  logout(){
    localStorage.clear();
  }
}
