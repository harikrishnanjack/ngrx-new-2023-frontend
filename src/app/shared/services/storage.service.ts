import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getToken() {
    return localStorage.getItem('accessToken') ?? '';
  }

  setAccessToken(token: string) {
    return localStorage.setItem('accessToken', token);
  }

  removeToken() {
    return localStorage.removeItem('accessToken');
  }
}
