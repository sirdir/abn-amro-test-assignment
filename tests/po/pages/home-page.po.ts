import { Locator, Page } from '@playwright/test';
import { PageWithHeader } from '../page-with-header.po';

export class HomePage extends PageWithHeader {
  readonly latinParagraph1: Locator;
  readonly latinParagraph2: Locator;
  readonly latinParagraph3: Locator;

  constructor(page: Page) {
    super(page, 'index.html');
    this.latinParagraph1 = this.$('#content p:nth-child(1)');
    this.latinParagraph2 = this.$('#content p:nth-child(2)');
    this.latinParagraph3 = this.$('#content p:nth-child(3)');
  }
}
