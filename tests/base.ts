import { mergeTests } from "@playwright/test";
import * as allFixtures from "@fixtures";

// Combine all individual fixtures
export const test = mergeTests(
  allFixtures.homePageFixture,
  allFixtures.signinFixture,
  allFixtures.checkOutFixture,
  allFixtures.confirmationFixture
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
