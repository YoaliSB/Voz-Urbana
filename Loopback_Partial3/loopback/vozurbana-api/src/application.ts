import {BootMixin, Binding, Booter} from '@loopback/boot';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication, RestServer, RestBindings} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import {MySequence} from './sequence';
import {
  AuthenticationComponent,
  AuthenticationBindings,
} from '@loopback/authentication';
import {MyAuthStrategyProvider} from './providers/auth-strategy.provider';
import {ApplicationConfig} from '@loopback/core';

import * as path from 'path';


export class VozurbanaApiApplication extends BootMixin(RestApplication){
  constructor(options?: ApplicationConfig) {
    super(options);

    this.projectRoot = __dirname;

    this.component(AuthenticationComponent);
    this.bind(AuthenticationBindings.STRATEGY).toProvider(
      MyAuthStrategyProvider,
    );

    // Set up the custom sequence
    this.sequence(MySequence);
  }

  async start() {
    await super.start();

    const server = await this.getServer(RestServer);
    const port = await server.get(RestBindings.PORT);
    console.log(`REST server running on port: ${port}`);
  }
}



/* El código anterior por si las dudas:
export class VozurbanaApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../../public'));

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
} */