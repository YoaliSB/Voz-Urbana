export class Evento {
	id: string;
	titulo: string;
	direccion: string;
	descripcion: string;
	link: string;
	fecha: string;
	tipo: string;
	resolved: boolean;
	usuarioId: string;
	
	constructor(titulo: string, direccion: string, descripcion: string, link: string, fecha: string, tipo: string, resolved: boolean){
		this.titulo = titulo;
		this.direccion = direccion;
		this.descripcion = descripcion;
		this.link = link;
		this.fecha = fecha;
		this.tipo = tipo;
		this.resolved = resolved;
	}

}