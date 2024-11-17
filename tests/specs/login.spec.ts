import { expect } from '@playwright/test';
import { ADMIN, ALL_USERS, test, INVALID_USER, LATIN_TEXT_1, LATIN_TEXT_2, LATIN_TEXT_3 } from '../fixtures';

const wrongCredentials = [
  { testName: 'login with empty email', email: '', password: '123', error: 'Email address is required' },
  { testName: 'login with empty password', email: ADMIN.email, password: '', error: 'Password is required' },
  {
    testName: 'login with wrong password',
    email: ADMIN.email,
    password: 'wrong-password',
    error: 'Email address and/or password is incorrect.',
  },
  {
    testName: 'login with non existing user',
    email: INVALID_USER.email,
    password: INVALID_USER.password,
    error: 'Email address and/or password is incorrect.',
  },
];

test.describe('Login Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
  });

  ALL_USERS.forEach(({ email, password }) => {
    test(`login as ${email} by clicking login button`, async ({ loginPage, homePage }) => {
      await loginPage.fillLoginFormByClick(email, password);
      await test.step('checking that we are on home page', async () => {
        await expect(homePage.header.userIcon).toBeVisible();
      });

      await test.step('checking that content avaiable to the user', async () => {
        await expect.soft(homePage.latinParagraph1).toHaveText(LATIN_TEXT_1);
        await expect.soft(homePage.latinParagraph2).toHaveText(LATIN_TEXT_2);
        await expect.soft(homePage.latinParagraph3).toHaveText(LATIN_TEXT_3);
      });
    });

    test.fail(`login as ${email} by pressing Enter`, async ({ loginPage, homePage }) => {
      await loginPage.visit();
      await loginPage.fillLoginFormBySubmit(email, password);

      await expect(homePage.header.userIcon).toBeVisible();
    });
  });

  wrongCredentials.forEach(({ testName, email, password, error }) => {
    test.fixme(`${testName}`, async ({ loginPage }) => {
      await loginPage.fillLoginFormByClick(email, password);

      await expect(loginPage.error).toHaveText(error);
    });
  });
});
