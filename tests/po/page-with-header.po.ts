import { Locator, Page } from '@playwright/test';
import { Header } from './components';
import { BasePage } from './base-page.po';

export abstract class PageWithHeader extends BasePage {
  readonly header: Header;

  constructor(page: Page, url = '') {
    super(page, url);
    this.header = new Header(page);
  }

  $(selector: string): Locator {
    return this.page.locator(selector);
  }

  async visit(): Promise<void> {
    await this.page.goto(this.url, { waitUntil: 'load' });
  }
}
