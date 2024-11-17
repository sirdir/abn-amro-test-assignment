import { expect } from '@playwright/test';
import { ADMIN, test } from '../fixtures';

test.describe('Navigation Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
    await loginPage.fillLoginFormByClick(ADMIN.email, ADMIN.password);
  });

  test.fail('user can logout', async ({ loginPage, homePage }) => {
    await homePage.header.logout();

    await expect(loginPage.email).toBeVisible();

    await expect.soft(loginPage.email).toBeEmpty();
    await expect.soft(loginPage.password).toBeEmpty();
  });
});
