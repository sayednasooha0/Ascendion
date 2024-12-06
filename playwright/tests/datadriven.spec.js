import { test, expect } from '@playwright/test';
const testdata = JSON.parse(JSON.stringify(require("../data.json")));

test.describe('Data Driven Sign In Test', () => {
  testdata.forEach((user) => {
    test(`Sign in for ${user.email}`, async ({ page }) => {
      await page.goto('https://magento.softwaretestingboard.com/');
      await page.getByRole('link', { name: 'Sign In' }).click();
      
      
      await page.getByLabel('Email').click();
      await page.getByLabel('Email').fill(user.email);
      
      await page.getByLabel('Password').click();
      await page.getByLabel('Password').fill(user.password);
      
      await page.getByRole('button', { name: 'Sign In' }).click();
      
    });
  });
});
