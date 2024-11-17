import { Page } from '@playwright/test';
import { PageWithHeader } from '../page-with-header.po';

export class ContactPage extends PageWithHeader {
  constructor(page: Page) {
    super(page, 'contacts.html');
  }
}
