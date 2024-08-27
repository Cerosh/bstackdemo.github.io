import { expect, Page } from "@playwright/test";

export async function assertItemNameByRole(page: Page, itemName: string) {
  await expect(
    page.getByRole("heading", { name: itemName }),
    "The selected Item should be displayed"
  ).toBeVisible();
}
