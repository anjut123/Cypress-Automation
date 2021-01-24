const { onBankingLoginPage } = require("../PageActions/BankingLoginPage")
const { onBankingManagerPage } = require("../PageActions/BankingManagerPage")

describe("verify Banking Manager Page",()=>{
   
    it("validate to click on Add Customer Button ",()=>{
        onBankingLoginPage.clickOnBankManagerLoginButton();
        onBankingManagerPage.clickOnAddCustomer();
    })

    it("validate to click on Open Account ",()=>{
        onBankingLoginPage.clickOnBankManagerLoginButton();
        onBankingManagerPage.clickOnOpenAccount();
    })

    it("validate to click on Customers",()=>{
        onBankingLoginPage.clickOnBankManagerLoginButton();
        onBankingManagerPage.clickOnCustomers();
    })
})