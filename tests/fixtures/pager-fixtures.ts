import { test as base } from '@playwright/test';
import { LoginPage, HomePage, ContactPage, ProductsPage } from '../po';

type PageFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  contactPage: ContactPage;
  productsPage: ProductsPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  homePage: async ({ page }, use) => await use(new HomePage(page)),
  contactPage: async ({ page }, use) => await use(new ContactPage(page)),
  productsPage: async ({ page }, use) => await use(new ProductsPage(page)),
});
