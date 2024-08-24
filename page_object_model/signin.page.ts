import { Page } from "@playwright/test";
import { step } from "@base";

export default class SignIn {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  @step("Sign in to Browser Stack with credentials")
  async signinToBStack(userName: string, password: string) {
    await this.page.locator("#username svg").click();
    await this.page.getByText(userName, { exact: true }).click();
    await this.page.locator("#password svg").click();
    await this.page.getByText(password, { exact: true }).click();
    await this.page.getByRole("button", { name: "Log In" }).click();
  }
}
