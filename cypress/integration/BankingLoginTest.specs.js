const { onBankingLoginPage } = require("../PageActions/BankingLoginPage")

describe("Verify the navigation feature to Customer Login and BankManager Login",()=>{

    it("validate the customer login button",()=>{
        onBankingLoginPage.clickOnCustomerLoginButton()
        cy.checkURL('customer') // cy.url().should('include','customer')
        cy.log(" clicked on customer login button")
    })
    
    it("validate the Banking Login Button ",()=>{
        onBankingLoginPage.clickOnBankManagerLoginButton();
        cy.checkURL('manager')//cy.url().should('include','manager');
       cy.log(" clicked on Bank Manager button")
    })
})