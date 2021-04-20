const { responseStatus: {OK}, assert } = require("../config");
const { sendPostRequest } = require("./requestLibrary");
const { testData } = require("./bootstrap");

async function getSession(wallet, password) {
    const apiKey = testData.apiKey;
    const url = '/auth';
    const header = {'treetracker-api-key': apiKey};

    const payload = {
        wallet: wallet,
        password: password
    };
    const response = await sendPostRequest(url, header, payload);
    const { body, status } = response;
    assert.equals(status, OK, 'Response status code is not 200 (OK)!', body);
    return body;
}

module.exports = {
    getSession
};
