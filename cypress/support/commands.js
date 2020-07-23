Cypress.Commands.add("landingchooseUser", (landingStep) => {
    cy.get('#projectSelect')
            .select(landingStep.projectSelect)
        cy.get('#amount')
            .select(landingStep.amount)
        cy.get('#creditMaturity')
            .select(landingStep.creditMaturity)
})

Cypress.Commands.add("emailUser", (identityStep) => {
    cy.get('#email-input')
        .type(identityStep.email)
        .should('have.value',identityStep.email)
})

Cypress.Commands.add("familySituationUser", (identityStep) => {
    cy.get('#maritalStatus-input').select(identityStep.maritalStatus).should('have.class', 'ng-valid')
    cy.get('#childNumberPropal-input').select(identityStep.childNumber).should('have.class', 'ng-valid')
})

Cypress.Commands.add("housingStatusUser", (houseStep) => {
    cy.get('#housingStatus-input').select(houseStep.housingStatus)
    cy.get('#housingStatusFrom-input-month').type(houseStep.housingStatusMouth)
    cy.get('#housingStatusFrom-input-year').type(houseStep.housingStatusYear)
})

Cypress.Commands.add("activitySingleUser", (activityStatus,activityStep) => {
    cy.get('#activitySector-input').select(activityStep.activitySector)
    cy.get('#profession-input').select(activityStep.profession)
    if(activityStatus.isIndependent){
        cy.get('#businessActivityStartDate-input-month').type(activityStep.businessActivityStartDateMouth)
        cy.get('#businessActivityStartDate-input-year').type(activityStep.businessActivityStartDateYear).should('have.class', 'ng-valid')
    }
    if(activityStatus.isSalarie){
        cy.get('#contractType-input').select(activityStep.contractType).should('have.class', 'ng-valid')
        cy.get('#employedFrom-input-month').type(activityStep.employedFromMouth)
        cy.get('#employedFrom-input-year').type(activityStep.employedFromYear).should('have.class', 'ng-valid')
    }
    if(activityStatus.isRetired){
        cy.get('#pensionFrom-input-month').type(activityStep.pensionFromMouth).should('have.class', 'ng-valid')
        cy.get('#pensionFrom-input-year').type(activityStep.pensionFromYear).should('have.class', 'ng-valid')
    }

})
Cypress.Commands.add("partnerActivityMariedUser", (partnerActivityStatus, partnerActivityStep) =>{
    if(partnerActivityStatus.isMariedOrPaced ){
        cy.get('#partnerActivitySector-input').select(partnerActivityStep.partnerActivitySector)
        cy.get('#partnerProfession-input').select(partnerActivityStep.partnerProfession).should('have.class', 'ng-valid')
        if(partnerActivityStatus.isSalarie){
            cy.get('#partnerContractType-input').select(partnerActivityStep.partnerContractType).should('have.class', 'ng-valid')
            cy.get('#partnerEmployedFrom-input-month').type(partnerActivityStep.partnerEmployedFromMouth)
            cy.get('#partnerEmployedFrom-input-year').type(partnerActivityStep.partnerEmployedFromYear).should('have.class', 'ng-valid') 
        }
        if(partnerActivityStatus.isRetired){
            cy.get('#partnerPensionFrom-input-month').type(partnerActivityStep.partnerPensionFromMouth)
            cy.get('#partnerPensionFrom-input-year').type(partnerActivityStep.partnerPensionFromYear)
        }
    }
    
}) 

Cypress.Commands.add("incomUser", (mariedStatus, activityStep, houseStep, partnerActivityStep) => {
    cy.get('#mainIncome-input').type(activityStep.mainIncome).should('have.class', 'ng-valid')
    cy.get('#housingAssistance-input').type(houseStep.housingAssistance).should('have.class', 'ng-valid')
    cy.get('#additionalIncome-input').type(houseStep.additionalIncome).should('have.class', 'ng-valid')
    if(mariedStatus.isMariedOrPaced){
        cy.get('#coIncome-input').type(partnerActivityStep.coIncome).should('have.class', 'ng-valid')

    }
})
Cypress.Commands.add('outcomeUser', (houseStatus,houseStep) => {
    if(houseStatus.isTenant){
        cy.get('#rentAmount-input').type(houseStep.rentAmount).should('have.class', 'ng-valid')
    }
    if(houseStatus.isOwnerWithCredit){
        cy.get('#mortgageAmount-input').type(houseStep.mortgageAmount).should('have.class', 'ng-valid')
    }
    if(houseStatus.isParent){
        cy.get('#childSupportPaymentsAmount-input').type(houseStep.childSupportPaymentsAmount).should('have.class', 'ng-valid')
        cy.get('#childCareExpensesAmount-input').type(houseStep.childCareExpensesAmount).should('have.class', 'ng-valid')
    }
    if(houseStatus.haveOtherLoan || houseStatus.isOwner){
        cy.get('#loanCount-input').select(houseStep.loanCount).should('have.class', 'ng-valid')
        if(houseStep.loanCount >= 1){
        cy.get('#type-input').select(houseStep.type).should('have.class', 'ng-valid')
        cy.get('#loanAmount-input').type(houseStep.loanAmount).should('have.class', 'ng-valid')
        } 
    }
})
Cypress.Commands.add('bankUser', (bankStep) => {
    cy.get('#bankCode-input').select(bankStep.bankCode).should('have.class', 'ng-valid')
    cy.get('#bankFrom-input-year').type(bankStep.bankFromYear).should('have.class', 'ng-valid')
})

Cypress.Commands.add('identityUser', (identityStep) => {
    cy.get(identityStep.gender).check({ force: true }).should('be.checked')
    cy.get('#lastName-input').type(identityStep.lastName).should('have.class', 'ng-valid')
    cy.get('#firstName-input').type(identityStep.firstName).should('have.class', 'ng-valid')
    cy.get('#dateOfBirth-input-day').type(identityStep.dateOfBirthDay)
    cy.get('#dateOfBirth-input-month').type(identityStep.dateOfBirthMouth)
    cy.get('#dateOfBirth-input-year').type(identityStep.dateOfBirthYear).should('have.class', 'ng-valid')
    cy.get('#postalCode-input').type(identityStep.postalCode).should('have.class', 'ng-valid')
    cy.get('#city-input').select(identityStep.city).should('have.class', 'ng-valid')
})

Cypress.Commands.add('identityPartnerUser', (partnerStatus, partnerIdentityStep) => {
    if(partnerStatus.isPartner){
        cy.get(partnerIdentityStep.partnerGender).check({ force: true }).should('be.checked')
        cy.get('#lastName-input').type(partnerIdentityStep.partnerLastName).should('have.class', 'ng-valid')
        if(partnerStatus.isMaried){
            cy.get('#maidenName-input').type(partnerIdentityStep.partnerMaidenName).should('have.class', 'ng-valid')
        }
        cy.get('#firstName-input').type(partnerIdentityStep.partnerFirstName).should('have.class', 'ng-valid')
        cy.get('#dateOfBirth-input-day').type(partnerIdentityStep.partnerDateOfBirthDay)
        cy.get('#dateOfBirth-input-month').type(partnerIdentityStep.partnerDateOfBirthMouth)
        cy.get('#dateOfBirth-input-year').type(partnerIdentityStep.partnerDateOfBirthYear).should('have.class', 'ng-valid')
        cy.get('#postalCode-input').type(partnerIdentityStep.partnerPostalCode).should('have.class', 'ng-valid')
        cy.get('#city-input').select(partnerIdentityStep.partnerCity).should('have.class', 'ng-valid')
    }
})

Cypress.Commands.add('contactUser', (identityStep) => {
    cy.get('#cellPhoneNumber-input').type(identityStep.cellPhoneNumber).should('have.class', 'ng-valid')
    cy.get('#phoneNumber-input').type(identityStep.phoneNumber).should('have.class', 'ng-valid')
    cy.get('#address-input').type(identityStep.address).should('have.class', 'ng-valid')
    cy.get('#postalCode-input').type(identityStep.postalCode).should('have.class', 'ng-valid')
    cy.get('#city-input').select(identityStep.city).should('have.class', 'ng-valid')
    cy.get('#countryZone-input').select(identityStep.countryZone).should('have.class', 'ng-valid')
})

Cypress.Commands.add('insuranceUser', (identityStep) => {
    cy.get('#insurance-subscribers-input').select(identityStep.insurance_subscribers).should('have.class', 'ng-valid')
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
