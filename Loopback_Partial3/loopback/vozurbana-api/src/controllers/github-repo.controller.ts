// Uncomment these imports to begin using these cool features!
import {get, param} from '@loopback/openapi-v3';
import {inject} from '@loopback/context';
import {credenciales} from '../../creds';

//github
const Octokat = require('octokat');
const oct = new Octokat(credenciales);

//starwars
const StarWarsAPI = require('star-wars-api');

const debug =require('debug')('github-repo');

export class GithubRepoController {
  constructor() {}
  @get('/repo/{org}/{repos}')
	async getGithubInfo(
	@param.path.string('org') org: string,
	@param.path.string('repos') rep: string
	): Promise<any>{
		debug('org/rep',org,rep);
		const respuesta = await oct.repos(org,rep).fetch();
		return respuesta;
	}
}
