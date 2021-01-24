// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//import {addMatchImageSnapshotPlugin} from 'cypress-image-snapshot/command'

//addMatchImageSnapshotCommand()

Cypress.Commands.add('open',()=>{
    cy.visit('http://zero.webappsecurity.com/')
    cy.clearCookies()
    cy.clearLocalStorage()
})

Cypress.Commands.add("selectProduct",productName =>{
    cy.visit('https://automationteststore.com/')
    cy.get(".prdocutname").each((el,index,list)=>{
           if(el.text().includes(productName))
           {
               cy.wrap(el).click()
           }
    })
})

Cypress.Commands.add("IterateOverElements",selector =>{

    cy.get(selector).each((el,index,list)=>{
        let getText= el.text();
        cy.log(`${index} ${getText}`)
    })
})

Cypress.Commands.add("SelectAllCheckboxes",selector =>{
    cy.get(selector).each((el,index,list)=>{
        cy.get(el).check();
 })
})

Cypress.Commands.add("getTheValue",selector =>{
    cy.get(selector).each((el,index,list)=>{
       let valueFromElement= el.val()
       cy.log(`Element value is ${valueFromElement}` )
    })
})

Cypress.Commands.add("checkURL",textToCompare =>{
    cy.url().should('include',textToCompare)
})