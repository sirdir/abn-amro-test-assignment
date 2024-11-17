import { Locator, Page } from '@playwright/test';

export class Footer {
  readonly appreciation: Locator;

  constructor(protected page: Page) {
    this.appreciation = this.page.getByTestId('footer-container');
  }
}
