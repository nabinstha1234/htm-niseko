import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('http://localhost:3000/');
      await expect(
        page.getByRole('heading', {
          name: 'Welcome to HTM',
        }),
      ).toBeVisible();
      await percySnapshot(page, 'Homepage with Welcome Message');
    });
  });
});
