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
  private getAddToCartButton = async (itemName: string): Promise<Locator> => {
    return this.addToCartButton(itemName);
  };

  private async clickAddToCartButton(itemName: string): Promise<void> {
    try {
      const button = await this.getAddToCartButton(itemName);
      await button.click();
    } catch (error) {
      console.error(`Failed to add item "${itemName}" to cart:`, error);
      throw error;
    }
  }

  @step("Add item to cart and proceed to checkout.")
  async addItemAndCheckout(itemName: string) {
    try {
      await this.clickAddToCartButton(itemName);
      await this.page.getByText("Checkout").click();
    } catch (error) {
      console.error(
        `Failed to complete checkout for item "${itemName}":`,
        error
      );
      throw error;
    }
  }
}
