import { test, expect } from '@playwright/test';

async function login(page, email, password) {
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.getByLabel('Email', { exact: true }).fill(email);
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();
}

async function selectProduct(page, productName, size, color) {
    await page.getByRole('link', { name: productName }).first().click();
    await page.getByLabel(size, { exact: true }).click();
    await page.getByLabel(color).click();
}

async function addToCart(page) {
    await page.getByRole('button', { name: 'Add to Cart' }).click();
}

async function goToCart(page) {
    await page.locator('xpath=//a[@class="action showcart"]').click();
}

async function checkout(page) {
    await page.locator('xpath=//button[@id="top-cart-btn-checkout"]').click();
}

async function placeOrder(page) {
    await page.goto('https://magento.softwaretestingboard.com/checkout/#shipping');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
}

async function continueShopping(page) {
    await page.getByRole('link', { name: 'Continue Shopping' }).click();
}

test('User Login', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await login(page, 'sayednasooha@zoho.com', 'Sayednasooha007');
    // Assertion: Check that user is logged in (based on UI element, e.g., account name)
    await expect(page.locator('xpath=//span[@class="customer-name"]')).toBeVisible();
});

test('Select Product and Add to Cart', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await login(page, 'sayednasooha@zoho.com', 'Sayednasooha007');
    await selectProduct(page, 'Hero Hoodie', 'M', 'Green');
    await addToCart(page);
    // Assertion: Check that the product was added to the cart
    await expect(page.locator('xpath=//span[@class="count"]')).toHaveText('1');
});

test('Proceed to Checkout', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await login(page, 'sayednasooha@zoho.com', 'Sayednasooha007');
    await selectProduct(page, 'Hero Hoodie', 'M', 'Green');
    await addToCart(page);
    await goToCart(page);
    await checkout(page);
    // Assertion: Verify that the checkout page is visible
    await expect(page.locator('xpath=//h1[text()="Checkout"]')).toBeVisible();
});

test('Place Order', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await login(page, 'sayednasooha@zoho.com', 'Sayednasooha007');
    await selectProduct(page, 'Hero Hoodie', 'M', 'Green');
    await addToCart(page);
    await goToCart(page);
    await checkout(page);
    await placeOrder(page);
    // Assertion: Check for order confirmation message
    await expect(page.locator('xpath=//h1[text()="Thank you for your purchase!"]')).toBeVisible();
});

test('Continue Shopping', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await login(page, 'sayednasooha@zoho.com', 'Sayednasooha007');
    await selectProduct(page, 'Hero Hoodie', 'M', 'Green');
    await addToCart(page);
    await goToCart(page);
    await checkout(page);
    await placeOrder(page);
    await continueShopping(page);
    // Assertion: Verify that the user is redirected to the homepage
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/');
});

