import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserServiceService } from '../../services/user-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  userModel = new User('nombre','example@mail.com','*****','usuario');

  adminForm = new FormGroup({
    email: new FormControl()
  });

  editForm = new FormGroup({
  	check: new FormControl()
  })

  modify = false;

  constructor(private rest: UserServiceService, private formBuilder: FormBuilder) { 
    this.createForm();
    this.createForm2();
  }

  createForm(){
    this.adminForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email])
    })
  }

  createForm2(){
  	this.editForm = this.formBuilder.group({
  		check: new FormControl()
  	})
  }

  enviarFormulario(){
    let forma = this.adminForm.value;
    this.userModel.mail = this.adminForm.value.email;
  }

  onSubmit(){
    if(this.modify) {
     console.log("Modificar usuario");
    }else {
      console.log("Eliminar usuario");
    }
  }

  modifyUser(){
    this.modify = true;
  }

  deleteUser(){
    this.modify = false;
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.rest.getUser().subscribe((data: any) => {
      console.log(data);
   });
  }

  get email():any{
    return this.adminForm.get('email');
  }
}
