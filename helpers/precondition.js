import { expect } from "@playwright/test";

export class SwagHelper {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto("https://www.saucedemo.com/", {
        waitUntil: "domcontentloaded"});
  }
}
