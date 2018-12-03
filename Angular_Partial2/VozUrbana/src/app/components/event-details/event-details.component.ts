import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/evento';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rest: EventServiceService) { }

  events: Evento = new Evento('','','','','','', '');

  ngOnInit() {
  	this.route.params.subscribe(params => {
       this.getEvent(params.id);
    });
  }

  getEvent(id: string) {
    this.rest.getEvent("idevento").subscribe((data: any) => {
      this.events=data;
    });
  }

}
