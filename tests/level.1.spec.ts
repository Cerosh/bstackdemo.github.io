import { test, expect } from "@playwright/test";
import Home from "../page_object_model/home.page";
import SignIn from "../page_object_model/signin.page";
import CheckOut from "../page_object_model/checkout.page";

test("Place an order for iPhone 12 Pro in the bstackdemo", async ({ page }) => {
  const homePage = new Home(page);
  await homePage.navigateToHome();
  await homePage.checkOutItem();
  const signInPage = new SignIn(page);
  await signInPage.signin();
  const checkoutPage = new CheckOut(page);
  await checkoutPage.enterShippingAddress();
  await expect(
    page.locator('[data-test="shipping-address-heading"]')
  ).toBeVisible();
});
