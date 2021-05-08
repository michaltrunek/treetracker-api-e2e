const {OK} = require("http-status-codes");
const assert = require("../libs/assertionLibrary.js");

/**
 * Assert expected wallet contain number of tokens
 * @param {Object} walletInfoResponse
 * @param {String} expectedWallet
 * @param {Number} expectedNumberOfTokens
 */
async function assertTokenInWallet(walletInfoResponse, expectedWallet, expectedNumberOfTokens) {
    const {wallets} = walletInfoResponse.body;
    assert.equals(walletInfoResponse.status, OK, 'Response status does not match!');

    for (let wallet of wallets) {
        if (Object.values(wallet).includes(expectedWallet)) {
            assert.equals(wallet.tokens_in_wallet, expectedNumberOfTokens, 'Number of expected tokens do not equal!');
            break;
        }
    }
}

module.exports = {
    assertTokenInWallet
};