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
//const cypress = require("cypress")
Cypress.Commands.add("landingchooseUser", (projectSelect, amount, creditMaturity) => {
    cy.get('#projectSelect')
            .select(projectSelect)
        cy.get('#amount')
            .select(amount)
        cy.get('#creditMaturity')
            .select(creditMaturity)
})

Cypress.Commands.add("emailUser", (email) => {
    cy.get('#email-input')
        .type(email)
        .should('have.value',email)
})

Cypress.Commands.add("familySituationUser", (maritalStatus, childNumber) => {
    cy.get('#maritalStatus-input').select(maritalStatus)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#childNumberPropal-input').select(childNumber)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
})

Cypress.Commands.add("housingStatusUser", (housingStatus, housingStatusMouth, housingStatusYear) => {
    cy.get('#housingStatus-input').select(housingStatus)
    cy.get('#housingStatusFrom-input-month').type(housingStatusMouth)
    cy.get('#housingStatusFrom-input-year').type(housingStatusYear)
})

Cypress.Commands.add("activityUser", (activitySector, profession, businessActivityStartDateMouth, businessActivityStartDateYear) => {
    cy.get('#activitySector-input').select(activitySector)
    cy.get('#profession-input').select(profession)
    cy.get('#businessActivityStartDate-input-month').type(businessActivityStartDateMouth)
    cy.get('#businessActivityStartDate-input-year').type(businessActivityStartDateYear)
    //maried
    cy.get('#contractType-input').select(contractType)
    cy.get('#employedFrom-input-month').type(employedFromMouth)
    cy.get('#employedFrom-input-year').type(profile.employedFromYear)
})

Cypress.Commands.add("incomUser", (mainIncome, housingAssistance, additionalIncome) => {
    cy.get('#mainIncome-input').type(mainIncome)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#housingAssistance-input').type(housingAssistance)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#additionalIncome-input').type(additionalIncome)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
})

Cypress.Commands.add('outcomeUser', (rentAmount, loanCount, type, loanAmount) => {
    cy.get('#rentAmount-input').type(rentAmount)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#loanCount-input').select(loanCount)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#type-input').select(type)
    cy.get('#loanAmount-input').type(loanAmount)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
})

Cypress.Commands.add('bankUser', (bankCode, bankFromYear) => {
    cy.get('#bankCode-input').select(bankCode)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#bankFrom-input-year').type(bankFromYear)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
})

Cypress.Commands.add('identityUser', (gender, lastName, firstName, dateOfBirthDay,dateOfBirthMouth, dateOfBirthYear, postalCode, city) => {
    cy.get(gender).check({ force: true }).should('be.checked')
    cy.get('#lastName-input').type(lastName)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#firstName-input').type(firstName)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#dateOfBirth-input-day').type(dateOfBirthDay)
    cy.get('#dateOfBirth-input-month').type(dateOfBirthMouth)
    cy.get('#dateOfBirth-input-year').type(dateOfBirthYear)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#postalCode-input').type(postalCode)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#city-input').select(city)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
})

Cypress.Commands.add('contactUser', (cellPhoneNumber,phoneNumber,address,postalCode,city,countryZone) => {
    cy.get('#cellPhoneNumber-input').type(cellPhoneNumber)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#phoneNumber-input').type(phoneNumber)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#address-input').type(address)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#postalCode-input').type(postalCode)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#city-input').select(city)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
    cy.get('#countryZone-input').select(countryZone)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
})

Cypress.Commands.add('insuranceUser', (insurance_subscribers) => {
    cy.get('#insurance-subscribers-input').select(insurance_subscribers)
    cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
})


Cypress.Commands.add('buttonClick', (label) => {
    cy.contains(label).click()
})
Cypress.Commands.add('urlWebSite', (urlLog )=>{
    cy.url().should('include', urlLog )
})
Cypress.Commands.add('pageTitle', (pageTitle )=>{
    cy.get('title')
            .should('contain',pageTitle)
})
