import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
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
  users = new Array<User>();

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private rest: UserServiceService, private formBuilder: FormBuilder, private router: Router) { 
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
    this.searchUserRequest();
  }

  searchUserRequest(){
    this.rest.getUserById(this.userModel.mail).subscribe(
    (data: any) => {
      this.rest.setUser(data);
      if(this.userModel.pwd === data.pwd){
        if(data.type === "cop"){
          this.router.navigate(['/police']);
        }else if(data.type === 'admin'){
          this.router.navigate(['/admin']);
        }else{
          this.router.navigate(['/ExploreEvents']);
        }
      } else{
        alert('El usuario o la contraseña son incorrectos');
      }
    },
    (err: any) => {
      console.log('HTTP Error', err, err.status);
      alert('El usuario o la contraseña son incorrectos');
   });
  }

  ngOnInit() {
    console.log("login");
  }

  getUserRequest(){
    this.rest.getUser().subscribe((data: any) => {
      console.log(data);
      this.users = data;
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