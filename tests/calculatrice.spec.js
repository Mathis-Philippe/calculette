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

test('multiplie 4 par 5 et efface l\'écran', async ({ page }) => {
    const fileUrl = `file://${path.resolve(__dirname, '../index.html')}`;
    await page.goto(fileUrl);

    await page.getByRole('button', { name: '4' }).click();
    await page.getByRole('button', { name: '×' }).click();
    await page.getByRole('button', { name: '5' }).click();
    await page.getByRole('button', { name: '=' }).click();
    await expect(page.locator('#ecran')).toHaveValue('20');

    await page.getByRole('button', { name: 'C', exact: true }).click();
    await expect(page.locator('#ecran')).toHaveValue('0');
});

test('vérifie que le calcul est bien ajouté à l\'historique', async ({ page }) => {
    const fileUrl = `file://${path.resolve(__dirname, '../index.html')}`;
    await page.goto(fileUrl);

    // On effectue un calcul simple : 8 - 3
    await page.getByRole('button', { name: '8' }).click();
    await page.getByRole('button', { name: '-' }).click();
    await page.getByRole('button', { name: '3' }).click();
    await page.getByRole('button', { name: '=' }).click();

    const premierCalcul = page.locator('#liste-historique li').first();
    await expect(premierCalcul).toContainText('8 - 3 = 5');
});