import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserServiceService } from '../../services/user-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { RxwebValidators, RxFormBuilder } from '@rxweb/reactive-form-validators';
//import { MatchPwdValidator } from '../../models/match-pwd-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userModel = new User('nombre','example@mail.com','*****','user');

  registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  constructor(private rest: UserServiceService, private formBuilder: FormBuilder, private router: Router) { 
    this.createForm();
  }

  createForm(){
    this.registerForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl('',[Validators.required,Validators.minLength(8),RxwebValidators.compare({fieldName: 'password'})])
    })
  }

  enviarFormulario(){
    let forma = this.registerForm.value;
    this.userModel.mail = this.registerForm.value.email;
    this.userModel.pwd = this.registerForm.value.password;  
    this.postUser();
  }

  getUser(){
    this.rest.getUser().subscribe((data: any) => {
      console.log(data);
   });
  }

  ngOnInit(){
    console.log("register");
  }

  postUser(){
    this.rest.postUser(this.userModel).subscribe(
      (res: any) => {
        console.log('HTTP response', res);
        this.router.navigate(['/ExploreEvents']);
      },
      (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se pudo crear el usuario');
      },
      () => console.log('HTTP request completed.')
    );
  }

  get email():any{
    return this.registerForm.get('email');
  }

  get password():any{
    return this.registerForm.get('password');
  }

  get confirmPassword():any{
    return this.registerForm.get('confirmPassword');
  }

  get usuarioActual(){
    return JSON.stringify(this.userModel);
  }

}
