import {RepositoryMixin} from '@loopback/repository';
import {Usuario}  from '../models';

import {inject} from '@loopback/context';
import {
  AuthenticationBindings,
  UserProfile,
  authenticate,
} from '@loopback/authentication';
import {get} from '@loopback/rest';

export class AuthenticationControllerController {
  constructor(
    @inject(AuthenticationBindings.CURRENT_USER) private user: Usuario
  ) {
  }

  @authenticate('BasicStrategy')
  @get('/whoami')
  whoAmI(): string {
    return this.user.name;
  }
}
