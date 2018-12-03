import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Usuario } from '../models';

@model()
export class Evento extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'string',
  })
  fecha?: string;

  @property({
    type: 'string',
  })
  link?: string;

  @property({
    type: 'string',
  })
  fotos?: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  resolved: boolean;

  @property({
    type: 'string',
    required: true,
    default: false,
  })
  tipo: string;

  @belongsTo(() => Usuario, {keyTo: 'mail'})
  usuarioId: string;

  constructor(data?: Partial<Evento>) {
    super(data);
  }
}
