import { Page, expect } from "@playwright/test";
import { step } from "@base";

export default class Confirmation {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  @step("Assert visiblity of shipping address heading.")
  async assertTheShippingAddressHeading() {
    await expect(
      this.page.locator('[data-test="shipping-address-heading"]')
    ).toBeVisible();
  }
}
