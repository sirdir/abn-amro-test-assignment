import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page.po';

export class LoginPage extends BasePage {
  readonly email: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    super(page, 'index.html');
    this.email = this.$('#email');
    this.password = this.$('#password');
    this.loginBtn = this.$('#btn-login');
    // there is no such locator on the page, but I assume it will be there when UI will be implemented
    this.error = this.$('#error');
  }

  async fillLoginFormBySubmit(email: string, password: string): Promise<void> {
    await this.fillLoginForm(email, password);
    await this.password.press('Enter');
  }

  async fillLoginFormByClick(email: string, password: string): Promise<void> {
    await this.fillLoginForm(email, password);
    await this.loginBtn.click();
  }

  private async fillLoginForm(email: string, password: string): Promise<void> {
    await this.email.fill(email);
    await this.password.fill(password);
  }
}
