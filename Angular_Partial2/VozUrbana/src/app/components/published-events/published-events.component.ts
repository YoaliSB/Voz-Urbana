import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/evento';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-published-events',
  templateUrl: './published-events.component.html',
  styleUrls: ['./published-events.component.scss']
})
export class PublishedEventsComponent implements OnInit {

  events:Evento[];
  constructor(private rest: EventServiceService) { }

  ngOnInit() {
    //this.getEvents();
  }

  getEvents(){
    this.rest.getUserById("string").subscribe(
    (data: any) => {
      this.events=data.events;
    },
    (err: any) => {
      alert('no se encontraron eventos');
    });
  }

}
