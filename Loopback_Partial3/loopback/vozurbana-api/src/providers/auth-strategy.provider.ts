import {Provider, inject, ValueOrPromise, Getter} from '@loopback/context';
import {Strategy} from 'passport';
import {RepositoryMixin, repository} from '@loopback/repository';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
  UserProfile,
} from '@loopback/authentication';
import {Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
import {BasicStrategy} from 'passport-http';

/*@repository.getter(UsuarioRepository) public getUsuarioRepository : Getter<UsuarioRepository>*/

export class MyAuthStrategyProvider implements Provider<Strategy | undefined> {
  constructor(
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata,
    @repository(UsuarioRepository) protected userRepo: UsuarioRepository,
  ) {}

  value(): ValueOrPromise<Strategy | undefined> {
    // The function was not decorated, so we shouldn't attempt authentication
    if (!this.metadata) {
      return undefined;
    }

    const name = this.metadata.strategy;
    switch(name){
      case "user":
        return new BasicStrategy(this.verifyUser.bind(this));
        break;
      case "admin":
        return new BasicStrategy(this.verifyAdmin.bind(this));
        break;
      case "cop":
        return new BasicStrategy(this.verifyCop.bind(this));
        break;
      case "owner":
        return new BasicStrategy(this.verifyOwner.bind(this));
        break;
      default: 
        return Promise.reject(`The strategy ${name} is not available.`);
        break;
    }
  }

  async verifyUser(
    username: string,
    password: string,
    callback: (err: Error | null, user?: Usuario | false) => void,
  ) {
    try{
      let user = await this.userRepo.findById(username);
      if(user.pwd === password){
        callback(null, user);
      }
      else{
        callback(null, false);
      }
    } catch {
      callback(null, false);
    }
  }

  async verifyAdmin(
    username: string,
    password: string,
    callback: (err: Error | null, user?: Usuario | false) => void,
  ) {
    try{
      let user = await this.userRepo.findById(username);
      if(user.pwd === password && user.type === "admin"){
        callback(null, user);
      }
      else{
        callback(null, false);
      }
    } catch {
      callback(null, false);
    }
  }

  async verifyCop(
    username: string,
    password: string,
    callback: (err: Error | null, user?: Usuario | false) => void,
  ) {
    try{
      let user = await this.userRepo.findById(username);
      if(user.pwd === password && user.type === "cop"){
        callback(null, user);
      }
      else{
        callback(null, false);
      }
    } catch {
      callback(null, false);
    }
  }

  async verifyOwner(
    username: string,
    password: string,
    callback: (err: Error | null, user?: Usuario | false) => void,
  ) {
    try{
      let user = await this.userRepo.findById(username);
      if(user.pwd === password){
        callback(null, user);
      }
      else{
        callback(null, false);
      }
    } catch {
      callback(null, false);
    }
  }
}