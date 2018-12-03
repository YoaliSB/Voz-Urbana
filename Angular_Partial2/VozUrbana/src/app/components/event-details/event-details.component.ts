import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/evento';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rest: EventServiceService, private router: Router) { }

  events: Evento = new Evento('','','','','','evento',false);
  id = "";

  resolved = false;

  patchEventRequest(){
    this.rest.patchEvent(this.events).subscribe(
      (data: any) => {
        console.log(data);
      },
      (err : any) => {
        console.log('HTTP Error', err, err.status);
        alert('Hubo un error al realizar los cambios');
      });
  }

  resolveEvent(){
    this.resolved = true;
    this.events.resolved = true;
    this.patchEventRequest();
  }

  ngOnInit() {
  	this.route.params.subscribe(params => {
       this.id = params.id;
    });
    this.getEvent();
  }

  getEvent() {
    this.rest.getEvent(this.id).subscribe(
    (data: any) => {
      this.events=data;
    },
    (err: any) => {
        this.router.navigate(['/ExploreEvents']);
    });
  }

}
