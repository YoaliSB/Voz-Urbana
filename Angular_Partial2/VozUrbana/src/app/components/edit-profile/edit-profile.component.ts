import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RxwebValidators, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { UserServiceService } from '../../services/user-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  nombre:string;
  mail:string;
  psw:string;
  tipo:string;
  userModel = new User(this.nombre,this.mail,this.psw,this.tipo);
  
  editProfileForm = new FormGroup({
    nombre: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    fotos: new FormControl()
  });

  constructor(private rest: UserServiceService, private formBuilder: FormBuilder, private router: Router) { 
    this.createForm();
  }

  createForm(){
    this.editProfileForm = this.formBuilder.group({
      name: new FormControl('', Validators.minLength(1)),
      email: new FormControl('',Validators.email),
      fotos: new FormControl(),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl('',[Validators.required,Validators.minLength(8),RxwebValidators.compare({fieldName: 'password'})])
    })
  }

  enviarFormulario(){
    let forma = this.editProfileForm.value;
    this.userModel.name = this.editProfileForm.value.name;
    this.userModel.mail = this.editProfileForm.value.email;
    this.userModel.pwd = this.editProfileForm.value.password;
    this.userModel.type = "user";
    this.patchUserRequest();
  }

  ngOnInit() {
    //this.getUserById(//mail del monito);
  }

  getUserRequest(){
    this.rest.getUserById("string@string.com").subscribe(
      (data: any) => {
        console.log(data);
        this.nombre=data["name"];
        this.mail=data["mail"];
        this.psw=data["pwd"];
        this.tipo=data["type"];
      },
      (err : any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se encontró el usuario');
      });
  }

  patchUserRequest(){
    this.rest.patchUser(this.userModel).subscribe(
      (data: any) => {
        console.log(data);
      },
      (err : any) => {
        console.log('HTTP Error', err, err.status);
        alert('Hubo un error al realizar los cambios');
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

  get confirmPassword():any{
    return this.editProfileForm.get('confirmPassword');
  }


  get fotos():any{
    return this.editProfileForm.get('fotos');
  }

  get usuarioActual(){
    return JSON.stringify(this.userModel);
  }

}
