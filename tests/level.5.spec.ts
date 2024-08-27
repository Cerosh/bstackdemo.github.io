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
    const itemName = "iPhone 12 Mini";
    await homePage.addItemAndCheckout(itemName);
    await signInPage.signinToBStack("demouser");
    await checkOutPage.assertItemInCheckout(itemName);
    await checkOutPage.enterShippingAddress();
    await confirmationPage.assertTheShippingAddressHeading();
    await confirmationPage.assertItemInConfirmation(itemName);
  });
});
