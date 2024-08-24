import { mergeTests } from "@playwright/test";

import { homePageFixture } from "@fixtures/homePage.fixture";
import { signinFixture } from "@fixtures/signin.fixture";
import { checkOutFixture } from "@fixtures/checkout.fixture";
import { confirmationFixture } from "@fixtures/confirmation.fixture";

// Combine all individual fixtures
export const test = mergeTests(
  homePageFixture,
  signinFixture,
  checkOutFixture,
  confirmationFixture
);
export { expect } from "@playwright/test";
export function step(stepName?: string) {
  return function decorator(
    target: Function,
    context: ClassMethodDecoratorContext
  ) {
    return function replacementMethod(...args: any) {
      const name =
        stepName || `${this.constructor.name}.${context.name as string}`;
      return test.step(name, async () => {
        return await target.call(this, ...args);
      });
    };
  };
}
