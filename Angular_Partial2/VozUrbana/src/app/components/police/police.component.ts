import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from "@angular/router";
import { UserServiceService } from '../../services/user-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.scss']
})
export class PoliceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
