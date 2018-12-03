import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/evento';
import { EventServiceService } from 'src/app/services/event-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-explore-events',
  templateUrl: './explore-events.component.html',
  styleUrls: ['./explore-events.component.scss'],
  providers: [ NgbCarouselConfig ]
})
export class ExploreEventsComponent implements OnInit {


  events:Event[];
  constructor(private rest: EventServiceService, config: NgbCarouselConfig, private userRest: UserServiceService, private router: Router) { 
    config.interval = 10000;
  }

  ngOnInit() {
    let user = this.userRest.getCurrentUser();
    if(user == null){
      this.router.navigate(['/']);
    } 
  }

  getEvents(){
    this.rest.getEvents().subscribe(
    (data: any) => {
      this.events=data;
    },
    (err: any) => {
        console.log('HTTP Error', err, err.status);
        alert('No se encontraron eventos');
   });
  }

}
