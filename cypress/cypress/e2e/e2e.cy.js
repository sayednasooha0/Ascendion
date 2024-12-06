require('cypress-xpath');

describe('e2e', () => {
    describe('magento', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevents uncaught exceptions from failing the tests
        });

        it('Sign In and Add Product to Cart', () => {
            cy.visit("https://magento.softwaretestingboard.com/");

            // Sign In
            cy.get('.panel > .header > .authorization-link > a').click()
            cy.get('label[for="email"]').click(); // Click on the email field
            cy.get('input[name="login[username]"]').type('sayednasooha@zoho.com'); // Fill the email
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Sayednasooha007') // Click on the password field
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click() // Click the Sign In button

            // Select Product (Hero Hoodie)
            cy.xpath("//a[normalize-space()='Hero Hoodie']").first().click();
            cy.get('#option-label-size-143-item-168').click() // Select size M
            cy.get('#option-label-color-93-item-53').click(); // Select color Green
            cy.xpath("//button[@title='Add to Cart']").click(); // Add to cart

            //select products(grey tank)

            cy.get('.home > a').click()

            cy.get(':nth-child(3) > .product-item-info').click()
            cy.get('#option-label-size-143-item-166').click()
            cy.get('#option-label-color-93-item-52').click()
            cy.xpath("//button[@title='Add to Cart']").click()

            cy.get('.home > a').click()
            
            cy.get(':nth-child(2) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
            cy.get('#option-label-size-143-item-169').click()
            cy.get('#option-label-color-93-item-60').click()
            cy.xpath("//button[@title='Add to Cart']").click()

         // Wait for the cart to update
            cy.wait(10000);

            // Go to Cart and Checkout
            cy.xpath("//a[@class='action showcart']").click(); // Open Cart
            cy.wait(6000)
            cy.xpath("//button[@id='top-cart-btn-checkout']").click(); // Checkout

            // Checkout Process
            cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping');
            cy.wait(20000)
            cy.get('.button > span').click(); // Click Next
            cy.wait(20000)
            cy.xpath("//button[normalize-space()='Place Order']").click(); // Place Order

            // Continue Shopping
            cy.xpath("//a[normalize-space()='Continue Shopping']").click(); // Continue Shopping
        });
    });
});
