// Uncomment these imports to begin using these cool features!
import { get, param } from '@loopback/openapi-v3';
import { inject } from '@loopback/context';
import { credenciales } from '../../creds';

//github
const Octokat = require('octokat');
const oct = new Octokat(credenciales);
const googleMapsClient = require('@google/maps').createClient({
	key: 'AIzaSyAtQKl2wqACda5_ytIqU1V84hLISGSmw7g',
	Promise: Promise
});
//starwars
const StarWarsAPI = require('star-wars-api');

const debug = require('debug')('github-repo');
var res: any;

export class GithubRepoController {
	constructor() { }
	@get('/repo/{org}/{repos}')
	async getGithubInfo(
		@param.path.string('org') org: string,
		@param.path.string('repos') rep: string
	): Promise<any> {
		debug('org/rep', org, rep);
		const respuesta = await oct.repos(org, rep).fetch();
		return respuesta;
	}
	@get('/maps/{place}')
	async getMaps(
		@param.path.string('place') place: string
	): Promise<any> {

		res = googleMapsClient.geocode({ address: place })
			.asPromise()
			.then((response: any) => {
				console.log(response.json.results);
				return (response.json.results)
			})
			.catch((err: any) => {
				console.log(err);
			});
		console.log("wuuuuuuuuuu")
		console.log(res)
		return (res)



	}


}
