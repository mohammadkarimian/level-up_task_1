#!/usr/bin/env node

import CommandLineInterface from "./services/command-line-interface";
import Sanitizer from './utils/sanitizer';
import HttpClient from './services/http-client';

class Application {
	private cli: CommandLineInterface
	private sanitizer: Sanitizer
	private httpClient: HttpClient

	constructor(){
		this.cli = new CommandLineInterface()
		this.sanitizer = new Sanitizer()
		this.httpClient = new HttpClient()
	}

	start() {
		let body: string = this.sanitizer.sanitize(this.cli.getBody())
		this.httpClient.post(
			body,
			this.cli.getEndpoint()
		).then(response => console.log(response))
			.catch(error => console.log(error))
	}
}

let app = new Application()
app.start();

export default Application;
