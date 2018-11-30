import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import { Evento } from '../models';


@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
    required: true,
  })
  mail: string;

  @property({
    type: 'string',
    required: true,
  })
  pwd: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @hasMany(()=>Evento) eventos?: Evento[];

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}
