import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/evento';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-relevant-events',
  templateUrl: './relevant-events.component.html',
  styleUrls: ['./relevant-events.component.scss']
})
export class RelevantEventsComponent implements OnInit {

  events:Evento[];
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
