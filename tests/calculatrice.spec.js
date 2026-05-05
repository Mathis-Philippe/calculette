const { test, expect } = require('@playwright/test');
const path = require('path');

test('additionne 2 et 3 via l\'interface graphique', async ({ page }) => {
    const fileUrl = `file://${path.resolve(__dirname, '../index.html')}`;
    await page.goto(fileUrl);

    await page.getByRole('button', { name: '2' }).click();
    await page.getByRole('button', { name: '+' }).click();
    await page.getByRole('button', { name: '3' }).click();
    await page.getByRole('button', { name: '=' }).click();

    await expect(page.locator('#ecran')).toHaveValue('5');
});