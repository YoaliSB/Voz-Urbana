import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Event } from '../../models/event';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rest: EventServiceService) { }

  events: Event;

  ngOnInit() {
  	this.route.params.subscribe(params => {
       this.getEvent(params.id);
    });
  }

  getEvent(id: string) {
    this.rest.getEvent(id).subscribe((data: any) => {
    	for(var i=0;i<data.length;i++){

    		if(data[i]["id"]==id){
    			this.events=data[i];
    		}
    	}
    	console.log(this.events);
       //this.events = data;
    });
  }

}
