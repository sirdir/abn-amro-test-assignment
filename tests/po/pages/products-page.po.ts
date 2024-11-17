import { Page } from '@playwright/test';
import { PageWithHeader } from '../page-with-header.po';

export class ProductsPage extends PageWithHeader {
  constructor(page: Page) {
    super(page);
  }
}
