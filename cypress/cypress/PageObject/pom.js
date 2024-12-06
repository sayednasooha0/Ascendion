require('cypress-xpath');

class Login {
    visit() {
        cy.visit("https://magento.softwaretestingboard.com/");
    }

    clickSignIn() {
        cy.get('.panel > .header > .authorization-link > a').click();
    }

    setEmail(email) {
        cy.get('label[for="email"]').click();
        cy.get('input[name="login[username]"]').type(email);
    }

    setPassword(password) {
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password);
    }

    clickSignInButton() {
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
    }
}

class ProductPage {
    selectProduct(productName) {
        cy.xpath(`//a[normalize-space()='${productName}']`).first().click();
    }

    selectSize(sizeId) {
        cy.get(`#option-label-size-143-item-${sizeId}`).click(); // Example: sizeId = 168 for 'M'
    }

    selectColor(colorId) {
        cy.get(`#option-label-color-93-item-${colorId}`).click(); // Example: colorId = 53 for 'Green'
    }

    addToCart() {
        cy.xpath("//button[@title='Add to Cart']").click();
    }

    home(){
        cy.get('.home > a').click()
    }
}

class CartPage {
    openCart() {
        cy.xpath("//a[@class='action showcart']").click();
    }

    proceedToCheckout() {
        cy.xpath("//button[@id='top-cart-btn-checkout']").click();
    }
}

class CheckoutPage {
    visitCheckout() {
        cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping');
    }

    clickNext() {
        cy.get('.button > span').click(); // Click Next
    }

    placeOrder() {
        cy.xpath("//button[normalize-space()='Place Order']").click();
    }

    continueShopping() {
        cy.xpath("//a[normalize-space()='Continue Shopping']").click();
    }
}

// Export all classes
export { Login, ProductPage, CartPage, CheckoutPage };
