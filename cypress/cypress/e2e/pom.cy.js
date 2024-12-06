import { Login, ProductPage, CartPage, CheckoutPage } from '../PageObject/pom';

require('cypress-xpath');

describe('e2e', () => {
    describe('magento', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevents uncaught exceptions from failing the tests
        });

        it('Sign In and Add Multiple Products to Cart', () => {
            const login = new Login();
            const productPage = new ProductPage();
            const cartPage = new CartPage();
            const checkoutPage = new CheckoutPage();

            // Sign In
            login.visit();
            login.clickSignIn();
            login.setEmail('sayednasooha@zoho.com');
            login.setPassword('Sayednasooha007');
            login.clickSignInButton();

            // Select Product 1: Hero Hoodie
            productPage.selectProduct('Hero Hoodie');
            productPage.selectSize(168); // Size M
            productPage.selectColor(53); // Green
            productPage.addToCart();

            // Select Product 2: Grey Tank
            productPage.home(); // Return to homepage
            productPage.selectProduct('Argus All-Weather Tank');
            productPage.selectSize(166); // Size S
            productPage.selectColor(52); // Blue
            productPage.addToCart();

            // Select Product 3: Some Other Product
            productPage.home(); // Return to homepage
            productPage.selectProduct('Breathe-Easy Tank'); // Adjust product name as required
            productPage.selectSize(169); // Size L
            productPage.selectColor(60); // Black
            productPage.addToCart();

            // Select Product 4: Some Other Product
            productPage.home(); // Return to homepage
            productPage.selectProduct('Radiant Tee'); // Adjust product name as required
            productPage.selectSize(169); // Size L
            productPage.selectColor(50); 
            productPage.addToCart();

            // Select Product 5: Some Other Product
            productPage.home(); // Return to homepage
            productPage.selectProduct('Push It Messenger Bag'); // Adjust product name as required
            productPage.addToCart();

            // Select Product 5: Some Other Product
            productPage.home(); // Return to homepage
            productPage.selectProduct('Fusion Backpack'); // Adjust product name as required
            productPage.addToCart();

            // Wait for the cart to update
            cy.wait(10000);

            // Go to Cart and Checkout
            cartPage.openCart();
            cy.wait(6000); // Wait before checkout
            cartPage.proceedToCheckout();

            // Checkout Process
            checkoutPage.visitCheckout();
            cy.wait(20000); // Wait before clicking Next
            checkoutPage.clickNext();
            cy.wait(20000); // Wait before placing order
            checkoutPage.placeOrder();

            // Continue Shopping
            checkoutPage.continueShopping();
        });
    });
});
