import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('sayednasooha@zoho.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Sayednasooha007');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Hero Hoodie' }).first().click();
  await page.getByLabel('M', { exact: true }).click();
  await page.getByLabel('Green').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.locator('xpath=//a[normalize-space()="Home"]').click()
  await page.getByRole('link', { name: 'Argus All-Weather Tank' }).first().click();
  await page.getByLabel('M', { exact: true }).click();
  await page.getByLabel('Gray').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.locator('xpath=//a[normalize-space()="Home"]').click()
  await page.getByRole('link', { name: 'Breathe-Easy Tank' }).first().click();
  await page.getByLabel('M', { exact: true }).click();
  await page.getByLabel('Yellow').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.locator('xpath=//a[normalize-space()="Home"]').click()
  await page.locator('xpath=//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg"]').click()
  await page.getByRole('link', { name: 'Echo Fit Compression Short' }).first().click();
  await page.getByLabel('28', { exact: true }).click();
  await page.getByLabel('Purple').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.waitForTimeout(10000);
  await page.locator('xpath=//a[@class="action showcart"]').click()
  await page.locator('xpath=//button[@id="top-cart-btn-checkout"]').click();
  await page.goto('https://magento.softwaretestingboard.com/checkout/#shipping');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('link', { name: 'Continue Shopping' }).click();
});