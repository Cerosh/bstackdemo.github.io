import { Page } from "@playwright/test";

export default class CheckOut {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public enterShippingAddress = async (): Promise<void> => {
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel("First Name").fill("Cerosh");
    await this.page.getByLabel("Last Name").fill("Jacob");
    await this.page.getByLabel("Address").fill("Cerosh Address");
    await this.page.getByLabel("State/Province").fill("NSW");
    await this.page.getByLabel("Postal Code").fill("2287");
    await this.page.getByRole("button", { name: "Submit" }).click();
  };
}
