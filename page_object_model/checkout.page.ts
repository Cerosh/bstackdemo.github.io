import { Page } from "@playwright/test";
import { step } from "@base";

export default class CheckOut {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  @step("Enter the billing address")
  async enterShippingAddress() {
    await this.page.getByLabel("First Name").fill("Cerosh");
    await this.page.getByLabel("Last Name").fill("Jacob");
    await this.page.getByLabel("Address").fill("Cerosh Address");
    await this.page.getByLabel("State/Province").fill("NSW");
    await this.page.getByLabel("Postal Code").fill("2287");
    await this.page.getByRole("button", { name: "Submit" }).click();
  }
}
