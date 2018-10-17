export class User {
	name: string;
	mail: string;
	pwd: string;
	type: string;
	
	constructor(name: string, mail: string, pwd: string, type: string){

		this.name = name;
		this.mail = mail;
		this.pwd = pwd;
		this.type = type;
	}
}