import { Locator, Page, expect } from "@playwright/test";
import { step } from "@base";

export default class Confirmation {
  readonly page: Page;
  readonly confirmationMessageLabel: Locator;
  constructor(page: Page) {
    this.page = page;
    this.confirmationMessageLabel = this.page.getByTestId(
      "confirmation-message"
    );
  }
  @step("Assert visiblity of shipping address heading.")
  async assertTheShippingAddressHeading() {
    await expect(this.confirmationMessageLabel).toBeVisible();
  }
}
