import { SuperfaceClient } from "@superfaceai/one-sdk";

export function getAccountBalanceTest(providerName: string) {
    describe(`banking/get-account-balance/${providerName}`, () => {
        it('returns a result when called with ...', async () => {
            const sdk = new SuperfaceClient();
            const profile = await sdk.getProfile('banking/get-account-balance');
            const provider = await sdk.getProvider(providerName);

            const result = await profile
                .getUseCase('GetAccountBalance')
                .perform(undefined, { provider });

            expect(result.isOk()).toBe(true);
            expect(result.unwrap()).toMatchSnapshot();
        });
    });
}