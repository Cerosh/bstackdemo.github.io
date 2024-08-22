import { Page } from "@playwright/test";

export default class SignIn {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  public signin = async (): Promise<void> => {
    await this.page.locator("#username svg").click();
    await this.page.getByText("demouser", { exact: true }).click();
    await this.page.locator("#password svg").click();
    await this.page.getByText("testingisfun99", { exact: true }).click();
    await this.page.getByRole("button", { name: "Log In" }).click();
  };
}
