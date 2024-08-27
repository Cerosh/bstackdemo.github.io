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
  @step(
    "Assert the shipping address heading is visible after the checkout process."
  )
  async assertTheShippingAddressHeading() {
    await expect(
      this.confirmationMessageLabel,
      "The shipping address heading should be displayed."
    ).toBeVisible();
  }
}
