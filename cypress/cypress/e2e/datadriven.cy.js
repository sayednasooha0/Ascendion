describe("magento", () => {
    it("testing multiple users", () => {
      cy.fixture("data.json").then((data) => {
        cy.visit("https://magento.softwaretestingboard.com/");
  
        data.forEach((user) => {
          cy.log(`Testing login for user: ${user.email}`);
  
          // Navigate to login page
          cy.get('.panel > .header > .authorization-link > a').click();
  
          // Enter email and password
          cy.get('input[name="login[username]"]').type(user.email);
          cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(user.password);
  
          // Submit login form
          cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
  
          cy.get('#ui-id-4 > :nth-child(2)').click()

          cy.wait(5000)
          cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
          cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click()
        });
      });
    });
  });
  