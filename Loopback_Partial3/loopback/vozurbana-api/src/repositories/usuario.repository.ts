import {Usuario, Evento} from '../models';
import { EventoRepository } from './evento.repository';
import {Vozurbana_mdbDataSource} from '../datasources';
import {post, param, requestBody} from '@loopback/rest';
import {
  DefaultCrudRepository,
  juggler,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {Getter, inject} from '@loopback/context';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,typeof Usuario.prototype.mail>  {
public readonly eventos: HasManyRepositoryFactory<
    Evento,
    typeof Usuario.prototype.mail
  >;
  constructor(
    @inject('datasources.vozurbana_mdb') dataSource: Vozurbana_mdbDataSource) {
    super(Usuario, dataSource);
  }
}