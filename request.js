const request = require('request');

_EXTERNAL_URL = 'https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
        if(err) {
            return callback(err);
        }
        return callback(body);
    });
}
module.exports.callApi = callExternalApiUsingRequest;