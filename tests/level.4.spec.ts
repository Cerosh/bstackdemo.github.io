import { test } from "@base";
test.describe("Validate ordering functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("Place an order for iPhone 12 Pro in the bstackdemo", async ({
    homePage,
    signInPage,
    checkOutPage,
    confirmationPage,
  }) => {
    await homePage.addItemAndCheckout("iPhone 12 Mini");
    await signInPage.signinToBStack("demouser");
    await checkOutPage.enterShippingAddress();
    await confirmationPage.assertTheShippingAddressHeading();
  });
});
