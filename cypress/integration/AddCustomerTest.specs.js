const { onBankingLoginPage } = require("../PageActions/BankingLoginPage");
const { onAddCustomerPage } = require("../PageActions/AddCustomerPage");
const { onBankingManagerPage } = require("../PageActions/BankingManagerPage");

describe("Add a new customer",()=>{

    it("validate Add New Customer",()=>{
        onBankingLoginPage.clickOnBankManagerLoginButton();
        onBankingManagerPage.clickOnAddCustomer();
        onAddCustomerPage.addNewCustomer();
    })
})