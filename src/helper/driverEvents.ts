import { pageFixture } from "../hooks/pageFixture";
import { Page } from "@playwright/test";

class DriverEvents {

  constructor(public page: Page) {
    pageFixture.page = page;
  }

  async visit(url: string): Promise<void> {
    await pageFixture.page.goto(url);
  };

  async enterDataInTextField(sel: string, textToEnter: string): Promise<void> {
    await pageFixture.page.locator(sel).fill(textToEnter, { timeout: 30000 });
  };

  async clickElement(sel: string): Promise<void> {
    await pageFixture.page.locator(sel).click();
  };
}

export { DriverEvents };
