import request = require("request-promise-native");

class HttpClient {
    async post(body: string, endpoint: string) {
        return request({
            method: "POST",
            url: endpoint,
            headers: {},
            body: body
        });
    }
}

export default HttpClient;
