import { test as base } from "@playwright/test";
import CheckOut from "@pom/checkout.page";

export const checkOutFixture = base.extend<{ checkOutPage: CheckOut }>({
  checkOutPage: async ({ page }, use) => {
    await use(new CheckOut(page));
  },
});
