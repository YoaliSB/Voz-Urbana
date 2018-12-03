import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { Evento } from '../../models/evento';
import { EventServiceService } from 'src/app/services/event-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-police-main',
  templateUrl: './police-main.component.html',
  styleUrls: ['./police-main.component.scss']
})
export class PoliceMainComponent implements OnInit {

	events = new Array<Evento>();

  constructor(private rest: EventServiceService, private userRest: UserServiceService, private router: Router) { }

  ngOnInit() {
    let user = this.userRest.getCurrentUser();
    if(user == null){
      this.router.navigate(['/ExploreEvents']);
    } else{
      if(user.type !== "cop"){
        this.router.navigate(['/ExploreEvents']);
      }
    }
  }

  getEvents(){
    this.rest.getEvents().subscribe((data: any) => {
      console.log(data);
      for(var i=0;i<data.length;i++){
      	if(data[i]["tipo"]=="crimen"){
      		this.events.push(data[i]);
      	}
      }
      //this.events=data;
      console.log(this.events);

   });
  }
}