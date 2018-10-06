import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";

import {User} from './user.model'

@Injectable({
  providedIn: 'root'
})
export class RegistrationnService {
  selectedUser: User = {
    _id: '',
    fname: '',
    lname : '',
    email: '',
    mobile: '',
    password:'',
  };

  form: FormGroup = new FormGroup({
    _id: new FormControl(''),
    title: new FormControl(''),
    shortDescription : new FormControl(''),
    category: new FormControl(''),
    fullDescription: new FormControl(''),
    editorValue: new FormControl(''),
    __v: new FormControl(''),
  });

initializeFormGroup() {
    this.form.setValue({
      _id: null,
      title: '',
      shortDescription: '',
      category: '',
      fullDescription: '',
      editorValue:'',
      __v: '0',
});
}

noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

constructor(private http: HttpClient ) { }

postUser(user: User){
  console.log(user)
  return this.http.post(environment.apiBaseUrl+'/register',user);
}

  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
