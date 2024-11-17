import { expect, test } from '@playwright/test';

test('has title', async ({ page, browserName }) => {
  await page.goto('/');
  await page.screenshot({ path: `screenshot-${browserName}-${Date.now()}.png` });

  expect(await page.title()).toBe('Single Page Application');
});
