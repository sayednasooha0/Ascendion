require('cypress-xpath');

describe('e2e', () => {
    describe('Magento', () => {
        // Handle uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevents uncaught exceptions from failing the tests
        });

        // Test case for visiting the website
        it('Visit Magento Website', () => {
            cy.visit("https://magento.softwaretestingboard.com/");
        });

        // Test case for signing in
        it('Sign In', () => {
            cy.get('.panel > .header > .authorization-link > a').click(); // Click Sign In
            cy.get('label[for="email"]').click(); // Click on the email field
            cy.get('input[name="login[username]"]').type('sayednasooha@zoho.com'); // Fill the email
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass')
                .type('Sayednasooha007'); // Fill the password
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span')
                .click(); // Click the Sign In button
        });

        // Test case for adding Hero Hoodie to cart
        it('Add Hero Hoodie to Cart', () => {
            cy.xpath("//a[normalize-space()='Hero Hoodie']").first().click(); // Select Product
            cy.get('#option-label-size-143-item-168').click(); // Select size M
            cy.get('#option-label-color-93-item-53').click(); // Select color Green
            cy.xpath("//button[@title='Add to Cart']").click(); // Add to cart
        });

        // Test case for adding Grey Tank to cart
        it('Add Grey Tank to Cart', () => {
            cy.get('.home > a').click(); // Go back to Home
            cy.get(':nth-child(3) > .product-item-info').click(); // Select Product
            cy.get('#option-label-size-143-item-166').click(); // Select size S
            cy.get('#option-label-color-93-item-52').click(); // Select color Blue
            cy.xpath("//button[@title='Add to Cart']").click(); // Add to cart
        });

        // Test case for adding third product to cart
        it('Add Another Product to Cart', () => {
            cy.get('.home > a').click(); // Go back to Home
            cy.get(':nth-child(2) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click(); // Select Product
            cy.get('#option-label-size-143-item-169').click(); // Select size L
            cy.get('#option-label-color-93-item-60').click(); // Select color Red
            cy.xpath("//button[@title='Add to Cart']").click(); // Add to cart
        });

        // Test case for checkout
        it('Checkout', () => {
            cy.wait(10000); // Wait for cart update
            cy.xpath("//a[@class='action showcart']").click(); // Open Cart
            cy.wait(6000);
            cy.xpath("//button[@id='top-cart-btn-checkout']").click(); // Checkout
            cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping');
            cy.wait(20000); // Wait for the checkout page to load
            cy.get('.button > span').click(); // Click Next
            cy.wait(20000);
            cy.xpath("//button[normalize-space()='Place Order']").click(); // Place Order
        });

        // Test case for continuing shopping
        it('Continue Shopping', () => {
            cy.xpath("//a[normalize-space()='Continue Shopping']").click(); // Continue Shopping
        });
    });
});
