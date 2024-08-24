import { test as base } from "@playwright/test";
import Home from "@pom/home.page";

export const homePageFixture = base.extend<{
  homePage: Home;
}>({
  homePage: async ({ page }, use) => {
    await use(new Home(page));
  },
});
