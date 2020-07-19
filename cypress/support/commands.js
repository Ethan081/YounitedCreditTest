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

const cypress = require("cypress")

// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })




Cypress.Commands.add('principal_user', (gender, lastName, firstName, dateOfBirthDay, dateOfBirthMouth, dateOfBirthYear, address, postalCode, city, countryZone, email, cellPhoneNumber, phoneNumber, maritalStatus, childNumber, housingStatus, housingStatusMouth,housingStatusYear, activitySector, profession, businessActivityStartDateMouth, businessActivityStartDateYear, mainIncome, insurance_subscribers, housingAssistance, additionalIncome, rentAmount, loanCount, type, loanAmount, bankCode, bankFromYear) =>{
    cy.get('#email-input').type(email).should('have.value',email)
    cy.get('#maritalStatus-input').select(maritalStatus)
    cy.get('#childNumberPropal-input').select(childNumber)
    cy.get('#housingStatus-input').select(housingStatus)
    cy.get('#housingStatusFrom-input-month').type(housingStatusMouth)
    cy.get('#housingStatusFrom-input-year').type(housingStatusYear)
    cy.get('#activitySector-input').select(activitySector)
    cy.get('#profession-input').select(profession)
    cy.get('#businessActivityStartDate-input-month').type(businessActivityStartDateMouth)
    cy.get('#businessActivityStartDate-input-year').type(businessActivityStartDateYear)
    cy.get('#mainIncome-input').type(mainIncome)
    cy.get('#housingAssistance-input').type(housingAssistance)
    cy.get('#additionalIncome-input').type(additionalIncome)
    cy.get('#rentAmount-input').type(rentAmount)
    cy.get('#loanCount-input').select(loanCount)
    cy.get('#type-input').select(type)
    cy.get('#loanAmount-input').type(loanAmount)
    cy.get('#bankCode-input').select(bankCode)
    cy.get('#bankFrom-input-year').type(bankFromYear)
    cy.get(gender).check({ force: true }).should('be.checked')
    cy.get('#lastName-input').type(lastName)
    cy.get('#firstName-input').type(firstName)
    cy.get('#dateOfBirth-input-day').type(dateOfBirthDay)
    cy.get('#dateOfBirth-input-month').type(dateOfBirthMouth)
    cy.get('#dateOfBirth-input-year').type(dateOfBirthYear)
    cy.get('#cellPhoneNumber-input').type(cellPhoneNumber)
    cy.get('#phoneNumber-input').type(phoneNumber)
    cy.get('#address-input').type(address)
    cy.get('#postalCode-input').type(postalCode)
    cy.get('#city-input').select(city)
    cy.get('#countryZone-input').select(countryZone)
    cy.get('#insurance-subscribers-input').select(insurance_subscribers)
})

cypress.Commands.add("button_Suite", () => {
    cy.contains('Suite')
            .click()
})