import { Evento, Usuario } from '../models';
import { UsuarioRepository } from './usuario.repository';
import {Vozurbana_mdbDataSource} from '../datasources';
// import {inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  juggler,
  repository,
} from '@loopback/repository';
import {Getter, inject} from '@loopback/context';

export class EventoRepository extends DefaultCrudRepository<
  Evento,
  typeof Evento.prototype.id
> {
	public readonly usuario: BelongsToAccessor<
    Usuario,
    typeof Evento.prototype.id
  	>;
  constructor(
    @inject('datasources.vozurbana_mdb') dataSource: Vozurbana_mdbDataSource,
    @repository(UsuarioRepository)protected usuarioRepo: UsuarioRepository,
    @repository.getter('UsuarioRepository')
    usuarioRepositoryGetter: Getter<UsuarioRepository>
  ) {
    super(Evento, dataSource);
    this.usuario = this._createBelongsToAccessorFor(
    'usuario',
    usuarioRepositoryGetter)
  }
}
