import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/evento';
import { EventServiceService } from 'src/app/services/event-service.service';


@Component({
  selector: 'app-explore-events',
  templateUrl: './explore-events.component.html',
  styleUrls: ['./explore-events.component.scss']
})
export class ExploreEventsComponent implements OnInit {

  events:Evento[];
  constructor(private rest: EventServiceService) { }

  ngOnInit() {
    this.getEvents();
  }
  getEvents(){
    this.rest.getEvents().subscribe(
    (data: any) => {
      console.log(data);
      this.events=data;
      console.log(this.events);
    },
    (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se encontraron eventos');
   });
  }

}
