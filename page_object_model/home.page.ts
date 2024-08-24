import { Page } from "@playwright/test";
import { step } from "@base";

export default class Home {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  private addItemToCart = async (): Promise<void> => {
    await this.page.locator('[id="\\33 "]').getByText("Add to cart").click();
  };

  @step("Add item to cart and Checkout.")
  async checkOutItem() {
    await this.addItemToCart();
    await this.page.getByText("Checkout").click();
  }
}
