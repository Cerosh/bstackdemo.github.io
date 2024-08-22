import { Page } from "@playwright/test";

export default class Home {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  public navigateToHome = async (): Promise<void> => {
    await this.page.goto("https://bstackdemo.com/");
  };

  private addItemToCart = async (): Promise<void> => {
    await this.page.locator('[id="\\33 "]').getByText("Add to cart").click();
  };

  public checkOutItem = async (): Promise<void> => {
    await this.addItemToCart();
    await this.page.getByText("Checkout").click();
  };
}
