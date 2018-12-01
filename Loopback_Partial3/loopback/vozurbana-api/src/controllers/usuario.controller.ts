import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Usuario, Evento} from '../models';
import {UsuarioRepository, EventoRepository} from '../repositories';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
  UserProfile,
} from '@loopback/authentication';

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository,
  ) {}

  @post('/usuarios/{id}/eventos')
    async createEvent(
      @param.path.string('id') mail: typeof Usuario.prototype.mail,
      @requestBody() eventoData: Evento,
    ): Promise<Evento> {
      return await this.usuarioRepository.eventos(mail).create(eventoData);
    }

  @post('/usuarios', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: {'x-ts-type': Usuario}}},
      },
    },
  })
  async create(@requestBody() usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.create(usuario);
  }

  @get('/usuarios/count', {
    responses: {
      '200': {
        description: 'Usuario model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where,
  ): Promise<Count> {
    return await this.usuarioRepository.count(where);
  }

  @get('/usuarios', {
    responses: {
      '200': {
        description: 'Array of Usuario model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Usuario}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Usuario)) filter?: Filter,
  ): Promise<Usuario[]> {
    return await this.usuarioRepository.find(filter);
  }

  @patch('/usuarios', {
    responses: {
      '200': {
        description: 'Usuario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() usuario: Usuario,
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where,
  ): Promise<Count> {
    return await this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: {'x-ts-type': Usuario}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Usuario> {
    return await this.usuarioRepository.findById(id);
  }

  @patch('/usuarios/{id}', {
    responses: {
      '204': {
        description: 'Usuario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @del('/usuarios/{id}', {
    responses: {
      '204': {
        description: 'Usuario DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }
}
