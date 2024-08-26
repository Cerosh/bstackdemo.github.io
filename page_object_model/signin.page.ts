import { Locator, Page } from "@playwright/test";
import { step } from "@base";

export default class SignIn {
  readonly page: Page;
  readonly userNameTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly logInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameTextBox = this.page.getByTestId("username");
    this.passwordTextBox = this.page.getByTestId("password");
    this.logInButton = this.page.getByRole("button", { name: "Log In" });
  }
  @step("Sign in to Browser Stack with credentials")
  async signinToBStack(userName: string, password: string) {
    await this.userNameTextBox.click();
    await this.page.getByText(userName, { exact: true }).click();
    await this.passwordTextBox.click();
    await this.page.getByText(password, { exact: true }).click();
    await this.logInButton.click();
  }
}
