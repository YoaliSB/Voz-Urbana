import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from "@angular/router";
import {UserServiceService} from '../../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private rest: UserServiceService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.rest.getMaJson().subscribe((data: any) => {
      console.log(data);
   });
  }
}