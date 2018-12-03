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

  userModel = new User(' ',' ',' ',' ');

  adminForm = new FormGroup({
    email: new FormControl()
  });

  editForm = new FormGroup({
  	isCop: new FormControl()
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
  		isCop: new FormControl()
  	})
  }

  submitSearch(){
    let forma = this.adminForm.value;
    this.userModel.mail = this.adminForm.value.email;
    this.searchUser();
  }

  searchUser(){
    this.rest.getUserById(this.userModel.mail).subscribe(
    (data: any) => {
      this.userModel.type = data.type;
      this.userModel.name = data.name;
      this.userModel.pwd = data.pwd;
    },
    (err: any) => {
      console.log('HTTP Error', err, err.status);
      this.userModel.type = "";
      this.userModel.name = "";
      this.userModel.pwd = "";
      alert('No se encontró al usuario');
   });
  }

  onSubmit(){
    if(this.editForm.value.isCop == 1){
      this.userModel.type = "cop";
    }
    console.log(this.modify);
    if(this.modify) {
      this.patchUserRequest();
    }else {
      this.deleteUserRequest();
    }
  }

  deleteUserRequest(){
    this.rest.deleteUser(this.userModel.mail).subscribe(
      (res: any) => {
        console.log('HTTP response', res);
      },
      (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se pudo eliminar el usuario');
      },
      () => console.log('HTTP request completed.')
    );
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
