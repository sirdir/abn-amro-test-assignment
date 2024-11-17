import { Locator, Page } from '@playwright/test';
import { Footer } from './components';

export abstract class BasePage {
  readonly page: Page;
  readonly url: string;
  readonly footer: Footer;

  constructor(page: Page, url = '') {
    this.page = page;
    this.url = url;
    this.footer = new Footer(page);
  }

  $(selector: string): Locator {
    return this.page.locator(selector);
  }

  async visit(): Promise<void> {
    await this.page.goto(this.url || '', { waitUntil: 'load' });
  }
}
