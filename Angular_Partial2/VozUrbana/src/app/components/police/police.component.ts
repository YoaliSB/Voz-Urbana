import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserServiceService } from '../../services/user-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.scss']
})
export class PoliceComponent implements OnInit {

	events = new Array<Event>();

  constructor(private rest: EventServiceService) { }

  ngOnInit() {
      this.getEvents();

  }

  getEvents(){
    this.rest.getEvents().subscribe((data: any) => {
      console.log(data);
      for(var i=0;i<data.length;i++){
      	if(data[i]["tipo"]=="policial"){
      		this.events.push(data[i]);
      	}
      }
      //this.events=data;
      console.log(this.events);

   });
  }
}
