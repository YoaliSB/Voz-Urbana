import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventServiceService } from '../../services/event-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Event } from '../../models/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  eventModel = new Event('id','Título','Dirección','Descripción','Link','Fecha');

  createEventForm = new FormGroup({
  	titulo: new FormControl(),
  	direccion: new FormControl(),
  	descripcion: new FormControl(),
  	link: new FormControl(),
  	fecha: new FormControl(),
  	fotos: new FormControl()
  })

  constructor(private rest: EventServiceService, private formBuilder: FormBuilder) { 
  	this.createForm();
  }
  

  createForm(){
    this.createEventForm = this.formBuilder.group({
      titulo: new FormControl('',[Validators.required, Validators.email]),
      direccion: new FormControl('',[Validators.required,Validators.minLength(8)]),
      descripcion: new FormControl(),
      link: new FormControl(),
      fecha: new FormControl(),
      fotos: new FormControl()
    })
  }

  ngOnInit() {
  	this.getEvent();
  }

  enviarFormulario(){
    let forma = this.createEventForm.value;
    this.eventModel.titulo = this.createEventForm.value.titulo;
    this.eventModel.direccion = this.createEventForm.value.direccion;
  }

  getEvent(){
    this.rest.getEvents().subscribe((data: any) => {
      console.log(data);
   });
  }

  get usuarioActual(){
    return JSON.stringify(this.eventModel);
  }

  get titulo():any{
    return this.createEventForm.get('titulo');
  }

  get direccion():any{
    return this.createEventForm.get('direccion');
  }

  get descripcion():any{
    return this.createEventForm.get('descripcion');
  }

  get link():any{
    return this.createEventForm.get('link');
  }


  get fecha():any{
    return this.createEventForm.get('fecha');
  }

  get fotos():any{
    return this.createEventForm.get('fotos');
  }

}