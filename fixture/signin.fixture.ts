import { test as base } from "@playwright/test";
import SignIn from "@pom/signin.page";

export const signinFixture = base.extend<{ signInPage: SignIn }>({
  signInPage: async ({ page }, use) => {
    await use(new SignIn(page));
  },
});
