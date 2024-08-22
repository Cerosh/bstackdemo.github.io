import { Page } from "@playwright/test";

export default class Confirmation {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
