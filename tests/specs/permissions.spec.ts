import { expect } from '@playwright/test';
import { ADMIN, test, COMMON_USERS } from '../fixtures';

test.describe('Permissions Tests', () => {
  test.fixme('admin user should see an admin panel', async ({ loginPage, homePage }) => {
    await loginPage.visit();
    await loginPage.fillLoginFormByClick(ADMIN.email, ADMIN.password);

    await expect(homePage.header.adminPanel).toBeVisible();
  });

  COMMON_USERS.forEach(({ email, password }) => {
    test.fixme(`common user ${email} should not see an admin panel`, async ({ loginPage, homePage }) => {
      await loginPage.visit();
      await loginPage.fillLoginFormByClick(email, password);

      await expect(homePage.header.adminPanel).toBeHidden();
    });
  });
});
