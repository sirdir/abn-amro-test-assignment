import { expect } from '@playwright/test';
import { ADMIN, test } from '../fixtures';

test.describe('Navigation Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
    await loginPage.fillLoginFormByClick(ADMIN.email, ADMIN.password);
  });

  test.fixme('navigate to Products page', async ({ homePage, page }) => {
    await homePage.header.navigateToProducts();

    await expect(page).toHaveURL('products.html');
  });

  test.fixme('navigate to Contact page', async ({ homePage, page }) => {
    await homePage.header.navigateToContact();

    await expect(page).toHaveURL('contact.html');
  });
});
