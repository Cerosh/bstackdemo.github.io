import { test } from "@base";
import iPhone from "../data/phone_db.json";

test.describe("Validate ordering functionality using mock", () => {
  test.beforeEach(async ({ page }) => {
    await page.route(`./api/products`, async (route) => {
      await route.fulfill({ body: JSON.stringify(iPhone) });
    });
    await page.goto("/");
  });
  test("Place an order for iPhone 15(mock) in the bstackdemo", async ({
    homePage,
    signInPage,
    checkOutPage,
    confirmationPage,
  }) => {
    const itemName = "iPhone 15";
    await homePage.addItemAndCheckout(itemName);
    await signInPage.signinToBStack("demouser");
    await checkOutPage.assertItemInCheckout(itemName);
    await checkOutPage.enterShippingAddress();
    await confirmationPage.assertTheShippingAddressHeading();
    await confirmationPage.assertItemInConfirmation(itemName);
  });
});
