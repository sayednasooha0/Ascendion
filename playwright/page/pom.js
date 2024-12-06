class LoginPage {
    constructor(page) {
        this.page = page;
        this.signInLink = page.getByRole('link', { name: 'Sign In' });
        this.emailField = page.getByLabel('Email', { exact: true });
        this.passwordField = page.getByLabel('Password');
        this.submitButton = page.getByRole('button', { name: 'Sign In' });
    }

    async login(email, password) {
        await this.signInLink.click();
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }
}

class ProductPage {
    constructor(page) {
        this.page = page;
    }

    async selectProduct(productName, size, color) {
        // Use first matching element
        await this.page.getByRole('link', { name: productName }).first().click();

        // Select size
        await this.page.getByLabel(size, { exact: true }).click();

        // Select color
        await this.page.getByLabel(color).click();
    }

    async addToCart() {
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
    }

    async goToCart() {
        await this.page.locator('xpath=//a[@class="action showcart"]').click();
    }
}


class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('xpath=//button[@id="top-cart-btn-checkout"]');
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}



class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
        this.continueShoppingLink = page.getByRole('link', { name: 'Continue Shopping' });
    }

    async placeOrder() {
        await this.page.goto('https://magento.softwaretestingboard.com/checkout/#shipping');
        await this.nextButton.click();
        await this.placeOrderButton.click();
    }

    async continueShopping() {
        await this.continueShoppingLink.click();
    }
}
module.exports = { LoginPage, ProductPage, CartPage, CheckoutPage };

