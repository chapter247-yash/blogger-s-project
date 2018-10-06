import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RegistrationnService } from '../../shared/registrationn.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router"; 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



constructor(private reg_service: RegistrationnService,private toastr: ToastrService) { }

form: FormGroup = new FormGroup({
    _id: new FormControl('',),
    fname: new FormControl(''),
    lname : new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    password: new FormControl(''),
});

ngOnInit() {}

onSubmit(form) {
  console.log(form)
  if (form._id == "")
  this.reg_service.postUser(form).subscribe(
    res => {
    console.log(res);
    this.showSuccess();
      },
    err => {
      console.log(err);
      this.showFailure(err);
      }
    )}

  /*onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
}*/
  
onClear() {
  this.reg_service.form.reset();
  this.reg_service.initializeFormGroup();
}
  
onClose() {
  this.reg_service.form.reset();
  this.reg_service.initializeFormGroup();
}

showSuccess() {
  this.toastr.success('Registration Successfull!');
}

showFailure(err) {
  this.toastr.error('Registration Failed!');

}

}


