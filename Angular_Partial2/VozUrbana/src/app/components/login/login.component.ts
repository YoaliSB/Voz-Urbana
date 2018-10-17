import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from "@angular/router";
import { UserServiceService } from '../../services/user-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userModel = new User('nombre','example@mail.com','*****','type');

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private rest: UserServiceService, private formBuilder: FormBuilder) { 
    this.createForm();
  }

  createForm(){

    this.loginForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }

  enviarFormulario(){
    let forma = this.loginForm.value;
    this.userModel.mail = this.loginForm.value.email;
    this.userModel.pwd = this.loginForm.value.password;
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.rest.getMaJson().subscribe((data: any) => {
      console.log(data);
   });
  }

  get email():any{
    return this.loginForm.get('email');
  }

  get password():any{
    return this.loginForm.get('password');
  }

  get usuarioActual(){
    return JSON.stringify(this.userModel);
  }

}