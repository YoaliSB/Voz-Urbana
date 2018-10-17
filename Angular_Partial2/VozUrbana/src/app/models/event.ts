export class Event {
	id: number;
	titulo: string;
	direccion: string;
	descripcion: string;
	link: string;
	fecha: string;
	fotos: string;
	
	constructor(titulo: string, direccion: string, descripcion: string, link: string, fecha: string, fotos: string){
		this.titulo = titulo;
		this.direccion = direccion;
		this.descripcion = descripcion;
		this.link = link;
		this.fecha = fecha;
		this.fotos = fotos;

	}

}