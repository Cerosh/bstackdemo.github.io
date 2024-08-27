import { Locator, Page } from "@playwright/test";
import { step } from "@base";

export default class SignIn {
  readonly page: Page;
  readonly userNameDropDown: Locator;
  readonly passwordDropDown: Locator;
  readonly logInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameDropDown = this.page.getByTestId("username");
    this.passwordDropDown = this.page.getByTestId("password");
    this.logInButton = this.page.getByRole("button", { name: "Log In" });
  }
  private async getPasswordForUser(userName: string): Promise<string> {
    if (userName === "demouser") {
      const password = process.env.DEMO_USER_PASSWORD;
      if (!password) {
        throw new Error("Environment variable DEMO_USER_PASSWORD is not set.");
      }
      return password;
    }
    throw new Error(`No password configured for user: ${userName}`);
  }

  private async selectUserCredential(
    locator: Locator,
    text: string
  ): Promise<void> {
    try {
      await locator.click();
      await this.page.getByText(text, { exact: true }).click();
    } catch (error) {
      console.error(
        `Failed to select user credential with text "${text}":`,
        error
      );
      throw error;
    }
  }

  @step("Sign in to Browser Stack as")
  async signinToBStack(userName: string) {
    try {
      const password = await this.getPasswordForUser(userName);
      await this.selectUserCredential(this.userNameDropDown, userName);
      await this.selectUserCredential(this.passwordDropDown, password);
      await this.logInButton.click();
    } catch (error) {
      console.error("Sign-in failed:", error);
      throw error;
    }
  }
}
