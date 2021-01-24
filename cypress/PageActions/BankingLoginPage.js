const or =require("../pageobjects/BankingPageObject.json")
export class BankingLoginPage{

   clickOnCustomerLoginButton()
   {
       cy.contains(or.BankingLogin.customerBtn).click()
   }
 
   clickOnBankManagerLoginButton()
   {
       cy.contains(or.BankingLogin.bankManagerBtn).click()
   }
}
export const onBankingLoginPage = new BankingLoginPage();