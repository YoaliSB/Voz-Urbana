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
