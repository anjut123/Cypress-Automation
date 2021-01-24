// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
//require('./commands')
const customCommands = require('./commands.js')

module.exports = {
  commands: customCommands
}

beforeEach(()=>{
  cy.visit("http://www.way2automation.com/angularjs-protractor/banking/#/login")
//http://zero.webappsecurity.com/feedback.html
//http://www.way2automation.com/angularjs-protractor/banking/#/login
})



