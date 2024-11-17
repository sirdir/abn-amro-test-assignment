import { Locator, Page } from '@playwright/test';

export class Header {
  readonly navigation: Locator;
  readonly home: Locator;
  readonly products: Locator;
  readonly contact: Locator;
  readonly userIcon: Locator;
  readonly logoutBtn: Locator;
  readonly adminPanel: Locator;

  constructor(protected page: Page) {
    this.navigation = page.locator('#navigation');
    this.userIcon = this.navigation.locator('#user');
    this.home = this.navigation.locator('.home');
    this.products = this.navigation.locator('.products');
    this.contact = this.navigation.locator('.contact');
    this.logoutBtn = this.navigation.locator('#logout');
    this.adminPanel = this.navigation.locator('#admin-panel');
  }

  async navigateToHome(): Promise<void> {
    await this.home.click();
  }

  async navigateToProducts(): Promise<void> {
    await this.products.click();
  }

  async navigateToContact(): Promise<void> {
    await this.contact.click();
  }

  async logout(): Promise<void> {
    await this.userIcon.click();
    await this.logoutBtn.click();
  }
}
