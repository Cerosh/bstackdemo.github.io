import { Locator, Page } from "@playwright/test";
import { step } from "@base";

export default class Home {
  readonly page: Page;
  readonly addToCartButton: (itemName: string) => Locator;
  readonly itemTitle: (itemName: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemTitle = (itemName: string) => this.page.getByText(itemName);
    this.addToCartButton = (itemName: string) =>
      this.page
        .locator(".shelf-item")
        .filter({ has: this.itemTitle(itemName) })
        .getByText("Add to cart");
  }

  private addItemToCart = async (itemName: string): Promise<void> => {
    await this.addToCartButton(itemName).click();
  };

  @step("Add item to cart and Checkout.")
  async checkOutItem(itemName: string) {
    await this.addItemToCart(itemName);
    await this.page.getByText("Checkout").click();
  }
}
