import request = require("request-promise-native");

class HttpClient {
    async post(body: string, url: string) {
        return request({
            method: "POST",
            url: url,
            headers: {},
            body: body
        });
    }
}

export default HttpClient;
