import { Page } from "@playwright/test";

export async function fillFieldByLabel(
  page: Page,
  label: string,
  value: string
) {
  try {
    await page.getByLabel(label).fill(value);
  } catch (error) {
    console.error(`Failed to fill field with label "${label}":`, error);
  }
}
