import { test as base } from "@playwright/test";
import Confirmation from "@pom/confirmation.page";

export const confirmationFixture = base.extend<{
  confirmationPage: Confirmation;
}>({
  confirmationPage: async ({ page }, use) => {
    await use(new Confirmation(page));
  },
});
