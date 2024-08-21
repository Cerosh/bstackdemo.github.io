import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://bstackdemo.com/");
  await page.locator('[id="\\33 "]').getByText("Add to cart").click();
  await page.getByText("Checkout").click();
  await page.locator("#username svg").click();
  await page.getByText("demouser", { exact: true }).click();
  await page.locator("#password svg").click();
  await page.getByText("testingisfun99", { exact: true }).click();
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByLabel("First Name").fill("Cerosh");
  await page.getByLabel("Last Name").fill("Jacob");
  await page.getByLabel("Address").fill("Cerosh Address");
  await page.getByLabel("State/Province").fill("NSW");
  await page.getByLabel("Postal Code").fill("2287");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.locator('[data-test="shipping-address-heading"]')
  ).toBeVisible();
});
