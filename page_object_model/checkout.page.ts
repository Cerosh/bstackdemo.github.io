import { Page } from "@playwright/test";
import { step } from "@base";
import { UserGenerator } from "utils/user";
import { fillFieldByLabel } from "utils/fillFieldByLabel";
import { assertItemNameByRole } from "utils/assertItemByRole";

export default class CheckOut {
  readonly page: Page;
  private demoUser: UserGenerator.Demouser;
  constructor(page: Page) {
    this.page = page;
    this.demoUser = UserGenerator.generateDemoUser();
  }

  @step("Enter billing address using dynamically generated user details.")
  async enterShippingAddress() {
    for (const [label, value] of Object.entries(this.demoUser)) {
      await fillFieldByLabel(this.page, label, value);
    }

    await this.page.getByRole("button", { name: "Submit" }).click();
  }

  async assertItemInCheckout(itemName: string) {
    await assertItemNameByRole(this.page, itemName);
  }
}
