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

  events: Evento = new Evento('','','','','','evento',false);

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
       this.getEvent(params.id);
    });
  }

  getEvent(id: string) {
    this.rest.getEvent("idevento").subscribe((data: any) => {
      this.events=data;
    });
  }

}
