require('dotenv').config()
const { SuperfaceClient } = require('@superfaceai/one-sdk');

const sdk = new SuperfaceClient();

async function main() {
    const profile = await sdk.getProfile('banking/get-account-balance');

    const result = await profile
        .getUseCase('GetAccountBalance')
        .perform();

    console.log(result.unwrap());
}

main();