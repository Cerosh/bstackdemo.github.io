import { Page } from "@playwright/test";
import { step } from "@base";
import { UserGenerator } from "utils/user";

export default class CheckOut {
  readonly page: Page;
  private demoUser: UserGenerator.Demouser;
  constructor(page: Page) {
    this.page = page;
    this.demoUser = UserGenerator.generateDemoUser();
  }

  @step("Enter the billing address")
  async enterShippingAddress() {
    await this.page.getByLabel("First Name").fill(this.demoUser.firstname);
    await this.page.getByLabel("Last Name").fill(this.demoUser.lastname);
    await this.page.getByLabel("Address").fill(this.demoUser.address);
    await this.page.getByLabel("State/Province").fill(this.demoUser.state);
    await this.page.getByLabel("Postal Code").fill(this.demoUser.postalCode);
    await this.page.getByRole("button", { name: "Submit" }).click();
  }
}
