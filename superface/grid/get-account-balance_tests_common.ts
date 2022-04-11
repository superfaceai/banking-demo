import "dotenv/config";
import { SuperfaceClient } from "@superfaceai/one-sdk";
import { SuperfaceTest } from "@superfaceai/testing";

export function getAccountBalanceTest(provider: string) {
  describe(`chat/channels/${provider}`, () => {
    let superface: SuperfaceTest;

    describe("GetAccountBalance", () => {
      beforeAll(() => {
        superface = new SuperfaceTest({
          profile: "banking/get-account-balance",
          provider,
          useCase: "GetAccountBalance",
          testInstance: expect,
        });
      });

      it("performs correctly", async () => {
        await expect(
          superface.run({
            input: undefined,
          })
        ).resolves.toMatchSnapshot();
      });
    });
  });
}
