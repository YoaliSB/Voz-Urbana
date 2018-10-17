import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from "@angular/router";
import { UserServiceService } from '../../services/user-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userModel = new User('nombre','example@mail.com','*****');

  editProfileForm = new FormGroup({
    nombre: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    fotos: new FormControl()
  });

  constructor(private rest: UserServiceService, private formBuilder: FormBuilder) { 
    this.createForm();
  }

  createForm(){
    this.editProfileForm = this.formBuilder.group({
      name: new FormControl('', Validators.minLength(1)),
      email: new FormControl('',Validators.email),
      password: new FormControl('',Validators.minLength(8)),
      fotos: new FormControl()
    })
  }

  enviarFormulario(){
    let forma = this.editProfileForm.value;
    this.userModel.name = this.editProfileForm.value.name;
    this.userModel.mail = this.editProfileForm.value.email;
    this.userModel.pwd = this.editProfileForm.value.password;
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.rest.getMaJson().subscribe((data: any) => {
      console.log(data);
   });
  }

  get name():any{
    return this.editProfileForm.get('name');
  }

  get email():any{
    return this.editProfileForm.get('email');
  }

  get password():any{
    return this.editProfileForm.get('password');
  }

  get fotos():any{
    return this.editProfileForm.get('fotos');
  }

  get usuarioActual(){
    return JSON.stringify(this.userModel);
  }

}
