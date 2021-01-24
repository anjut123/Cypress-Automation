const or =require("../pageobjects/AddCustomerPageObject.json")
export class AddCustomerPage{
     
    addNewCustomer()
    {  
       cy.fixture('AddNewCustomer').then((data)=>{
           data.forEach(element => {
               
        cy.get(or.AddCustomer.firstName).type(element.firstname)
        cy.get(or.AddCustomer.lastName).type(element.lastname)
        cy.get(or.AddCustomer.postCode).type(element.postcode)
        cy.get(or.AddCustomer.btn).click();
      });
         })      
    }     
}

export  const onAddCustomerPage = new AddCustomerPage();