import { Locator, Page, expect } from "@playwright/test";
import { assertItemNameByRole } from "utils/assertItemByRole";

export default class Confirmation {
  readonly page: Page;
  readonly confirmationMessageLabel: Locator;
  constructor(page: Page) {
    this.page = page;
    this.confirmationMessageLabel = this.page.getByTestId(
      "confirmation-message"
    );
  }

  async assertTheShippingAddressHeading() {
    await expect(
      this.confirmationMessageLabel,
      "The shipping address heading should be displayed."
    ).toBeVisible();
  }

  async assertItemInConfirmation(itemName: string) {
    await assertItemNameByRole(this.page, itemName);
  }
}
