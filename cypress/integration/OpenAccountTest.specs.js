const { onBankingLoginPage } = require("../PageActions/BankingLoginPage");
const { onBankingManagerPage } = require("../PageActions/BankingManagerPage");
const { openAccountPage } = require("../PageActions/OpenAccountPage");

describe("Validate the customers from Open Account Page",()=>{

    it("validate customer list from open account",()=>{
        onBankingLoginPage.clickOnBankManagerLoginButton();
        onBankingManagerPage.clickOnOpenAccount();
        openAccountPage.getCustomerListFromDropDown();   
        openAccountPage.getCurrency();
    })
})