import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './vozurbana-mdb.datasource.json';

export class Vozurbana_mdbDataSource extends juggler.DataSource {
  static dataSourceName = 'vozurbana_mdb';

  constructor(
    @inject('datasources.config.vozurbana_mdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
