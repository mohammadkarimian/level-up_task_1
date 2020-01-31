import yargs = require("yargs");

class CommandLineInterface {
    private body: string;
    private endpoint: string;

    constructor() {
        const options = yargs
            .usage("Usage: -b <body> -e <endpoint>")
            .option("b", {
                alias: "body",
                describe: "Request Body",
                type: "string",
                demandOption: true
            })
            .option("e", {
                alias: "endpoint",
                describe: "Your Endpoint",
                type: "string",
                demandOption: true
            }).argv;

        this.body = String(options.body);
        this.endpoint = String(options.endpoint);
    }

    getBody(): string {
        return this.body;
    }

    getEndpoint(): string {
        return this.endpoint;
    }
}

export default CommandLineInterface;
