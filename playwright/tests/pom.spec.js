import { test, expect } from '@playwright/test';
const { LoginPage, ProductPage, CartPage, CheckoutPage } = require('../page/pom');

test('Complete Purchase Flow', async ({ page }) => {
    // Navigate to the site
    await page.goto('https://magento.softwaretestingboard.com/');

    // Login
    const loginPage = new LoginPage(page);
    await loginPage.login('sayednasooha@zoho.com', 'Sayednasooha007');

    // Select Product and Add to Cart
    const productPage = new ProductPage(page);
    await productPage.selectProduct('Hero Hoodie', 'M', 'Green');
   
     
    await page.waitForTimeout(5000);
    await productPage.addToCart();
    await page.waitForTimeout(3000)
    await page.locator('xpath=//a[normalize-space()="Home"]').click()

    await productPage.selectProduct('Breathe-Easy Tank', 'M', 'Yellow');
   
     
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await productPage.selectProduct('Radiant Tee', 'M', 'Orange');
   
     
    await page.waitForTimeout(5000);
    await productPage.addToCart();

    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await productPage.selectProduct('Argus All-Weather Tank', 'M', 'Gray');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg"]').click()
    await productPage.selectProduct('Echo Fit Compression Short', '28', 'Black');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg"]').click()
    await productPage.selectProduct('Gwen Drawstring Bike Short', '30', 'Orange');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg"]').click()
    await productPage.selectProduct('Fiona Fitness Short', '30', 'Black');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg"]').click()
    await productPage.selectProduct('Ida Workout Parachute Pant', '28', 'Black');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg"]').click()
    await productPage.selectProduct('Nora Practice Tank', 'S', 'Red');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg"]').click()
    await productPage.selectProduct('Celeste Sports Bra', 'S', 'Red');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg"]').click()
    await productPage.selectProduct('Juliana Short-Sleeve Tee', 'S', 'black');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//span[normalize-space()="Shop Tees"]').click()
    await productPage.selectProduct('Desiree Fitness Tee', 'S', 'black');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//span[normalize-space()="Shop Tees"]').click()
    await productPage.selectProduct('Gwyn Endurance Tee', 'S', 'black');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//span[normalize-space()="Shop Tees"]').click()
    await productPage.selectProduct('Diva Gym Tee', 'S', 'Yellow');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//span[normalize-space()="Shop Tees"]').click()
    await productPage.selectProduct('Karissa V-Neck Tee', 'S', 'Red');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//span[normalize-space()="Shop Tees"]').click()
    await productPage.selectProduct('Karissa V-Neck Tee', 'S', 'Red');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//span[normalize-space()="Shop Pants"]').click()
    await productPage.selectProduct('Portia Capri', '28', 'Blue');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//span[normalize-space()="Shop Pants"]').click()
    await productPage.selectProduct('Deirdre Relaxed-Fit Capri', '28', 'Blue');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//span[normalize-space()="Shop Pants"]').click()
    await productPage.selectProduct('Sylvia Capri', '28', 'Blue');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-performance.jpg"]').click()
    await productPage.selectProduct('Sybil Running Short', '28', 'purple');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-performance.jpg"]').click()
    await productPage.selectProduct('Gwen Drawstring Bike Short', '28', 'Blue');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    await page.locator('xpath=//a[normalize-space()="Home"]').click()
    await page.locator('xpath=//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-performance.jpg"]').click()
    await productPage.selectProduct('Deirdre Relaxed-Fit Capri', '28', 'Blue');
    await page.waitForTimeout(4000);
    await productPage.addToCart();
    //  Wait before navigating to cart
    await page.waitForTimeout(10000);
    await productPage.goToCart();

    // Proceed to Checkout
    const cartPage = new CartPage(page);
    await cartPage.checkout();

    // Place Order
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.placeOrder();

    // Continue Shopping
    await checkoutPage.continueShopping();
});
