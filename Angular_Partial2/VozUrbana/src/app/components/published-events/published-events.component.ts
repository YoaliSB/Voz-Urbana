import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/evento';
import { EventServiceService } from 'src/app/services/event-service.service';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-published-events',
  templateUrl: './published-events.component.html',
  styleUrls: ['./published-events.component.scss']
})
export class PublishedEventsComponent implements OnInit {

  events:Evento[]  = [];
  constructor(private rest: EventServiceService, private userRest: UserServiceService) { }

  ngOnInit() {
    let user = this.userRest.getCurrentUser();
    this.getEvents(user.mail);
  }

  getEvents(mail){
    this.rest.getEvents().subscribe(
    (data: any) => {
      for(var i=0;i<data.length;i++){
        if(data[i]["usuarioId"]===mail){
          this.events.push(data[i]);
        }
      }
    },
    (err: any) => {
      alert('No se encontraron eventos');
    });
  }

}
