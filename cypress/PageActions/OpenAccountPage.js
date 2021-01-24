export class OpenAccountPage{

    getCustomerListFromDropDown()
    {
       cy.IterateOverElements('#userSelect > option')
    }
    
    getCurrency()
    {
        cy.IterateOverElements("#currency > option");
    }
}
export const openAccountPage = new OpenAccountPage();