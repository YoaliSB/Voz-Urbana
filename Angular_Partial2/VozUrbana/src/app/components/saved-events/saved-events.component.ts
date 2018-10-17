import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Event } from '../../models/event';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-saved-events',
  templateUrl: './saved-events.component.html',
  styleUrls: ['./saved-events.component.scss']
})
export class SavedEventsComponent implements OnInit {

  events:Event[];
  constructor(private rest: EventServiceService) { }

  ngOnInit() {
    this.getEvents();
  }
  getEvents(){
    this.rest.getEvents().subscribe((data: any) => {
      console.log(data);
      this.events=data;
      console.log(this.events);

   });
  }

}
