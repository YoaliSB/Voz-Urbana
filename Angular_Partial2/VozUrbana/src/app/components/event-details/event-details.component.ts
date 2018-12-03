import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/evento';
import { EventServiceService } from 'src/app/services/event-service.service';
import {} from 'googlemaps';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  latitude:number;
  longitude:number;

  setCenter(){
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }
  
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(private route: ActivatedRoute, private rest: EventServiceService, private router:Router) { }

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
    this.setLatLon();
    
  }
  setLatLon(){
    var result=this.rest.getEventLatLon("idEvento");
    this.rest.getEventLatLon("idevento").subscribe((data: any) => {
      console.log(data);
      this.latitude=data[0].geometry.location.lat
      this.longitude=data[0].geometry.location.lng
      
      var mapProp = {
        center: new google.maps.LatLng(this.latitude,this.longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
   
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    
    });
    //var res=JSON.stringify(result)
    console.log(result);
    // this.latitude=19.2851005
    // this.longitude=-99.137188
  }
  getEvent(id: string) {
    this.rest.getEvent("idevento").subscribe((data: any) => {
      this.events=data;
    },
    (err: any) => {
        this.router.navigate(['/ExploreEvents']);
    });
  }

}
