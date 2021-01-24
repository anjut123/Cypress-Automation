
const or =require("../pageobjects/BankingManagerPageObject.json")
export class BankingManagerPage{

        clickOnAddCustomer()
        {
             cy.contains(or.BankingManagerLogin.addCustomerBtn).click()
             cy.url().should('include','addCust')
        }

        clickOnOpenAccount()
        {
            cy.contains(or.BankingManagerLogin.openAccountBtn).click()
            cy.url().should('include','openAccount')

        }

        clickOnCustomers()
        {
            cy.contains(or.BankingManagerLogin.customerBtn).click()
            cy.url().should('include','list')
        }

}
export const onBankingManagerPage = new BankingManagerPage()