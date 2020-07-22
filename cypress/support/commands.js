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
    cy.get('#maritalStatus-input').select(maritalStatus).should('have.class', 'ng-valid')
    cy.get('#childNumberPropal-input').select(childNumber).should('have.class', 'ng-valid')
})

Cypress.Commands.add("housingStatusUser", (housingStatus, housingStatusMouth, housingStatusYear) => {
    cy.get('#housingStatus-input').select(housingStatus)
    cy.get('#housingStatusFrom-input-month').type(housingStatusMouth)
    cy.get('#housingStatusFrom-input-year').type(housingStatusYear)
})

Cypress.Commands.add("activitySingleUser", (isIndependent, isSalarie, isRetired, activitySector, profession, businessActivityStartDateMouth, businessActivityStartDateYear, contractType, employedFromMouth, employedFromYear, pensionFromMouth, pensionFromYear) => {
    cy.get('#activitySector-input').select(activitySector)
    cy.get('#profession-input').select(profession)
    if(isIndependent){
        cy.get('#businessActivityStartDate-input-month').type(businessActivityStartDateMouth)
        cy.get('#businessActivityStartDate-input-year').type(businessActivityStartDateYear).should('have.class', 'ng-valid')
    }
    if(isSalarie){
        cy.get('#contractType-input').select(contractType).should('have.class', 'ng-valid')
        cy.get('#employedFrom-input-month').type(employedFromMouth)
        cy.get('#employedFrom-input-year').type(employedFromYear).should('have.class', 'ng-valid')
    }
    if(isRetired){
        cy.get('#pensionFrom-input-month').type(pensionFromMouth).should('have.class', 'ng-valid')
        cy.get('#pensionFrom-input-year').type(pensionFromYear).should('have.class', 'ng-valid')
    }

})

Cypress.Commands.add("partnerActivityMariedUser", (isMariedOrPaced, isSalarie, isRetired, partnerActivitySector, partnerProfession,partnerContractType,partnerEmployedFromMouth, partnerEmployedFromYear, partnerPensionFromMouth, partnerPensionFromYear) =>{
    if(isMariedOrPaced ){
        cy.get('#partnerActivitySector-input').select(partnerActivitySector)
        cy.get('#partnerProfession-input').select(partnerProfession).should('have.class', 'ng-valid')
        if(isSalarie){
            cy.get('#partnerContractType-input').select(partnerContractType).should('have.class', 'ng-valid')
            cy.get('#partnerEmployedFrom-input-month').type(partnerEmployedFromMouth)
            cy.get('#partnerEmployedFrom-input-year').type(partnerEmployedFromYear).should('have.class', 'ng-valid') 
        }
        if(isRetired){
            cy.get('#partnerPensionFrom-input-month').type(partnerPensionFromMouth)
            cy.get('#partnerPensionFrom-input-year').type(partnerPensionFromYear)
        }
    }
    
}) 

Cypress.Commands.add("incomUser", (isMariedOrPaced, mainIncome, housingAssistance, additionalIncome, coIncome) => {
    cy.get('#mainIncome-input').type(mainIncome).should('have.class', 'ng-valid')
    cy.get('#housingAssistance-input').type(housingAssistance).should('have.class', 'ng-valid')
    cy.get('#additionalIncome-input').type(additionalIncome).should('have.class', 'ng-valid')
    if(isMariedOrPaced){
        cy.get('#coIncome-input').type(coIncome).should('have.class', 'ng-valid')

    }
})
Cypress.Commands.add('outcomeUser', (isOwner, isTenant, isOwnerWithCredit, isParent,  haveOtherLoan, rentAmount, mortgageAmount, childSupportPaymentsAmount, childCareExpensesAmount,loanCount, type, loanAmount) => {
    if(isTenant){
        cy.get('#rentAmount-input').type(rentAmount).should('have.class', 'ng-valid')
    }
    if(isOwnerWithCredit){
        cy.get('#mortgageAmount-input').type(mortgageAmount).should('have.class', 'ng-valid')
    }
    if(isParent){
        cy.get('#childSupportPaymentsAmount-input').type(childSupportPaymentsAmount).should('have.class', 'ng-valid')
        cy.get('#childCareExpensesAmount-input').type(childCareExpensesAmount).should('have.class', 'ng-valid')
    }
    if(haveOtherLoan || isOwner){
        cy.get('#loanCount-input').select(loanCount).should('have.class', 'ng-valid')
        console.log(loanCount)
        if(loanCount >= 1){
        cy.get('#type-input').select(type).should('have.class', 'ng-valid')
        cy.get('#loanAmount-input').type(loanAmount).should('have.class', 'ng-valid')
        } 
    }
})
Cypress.Commands.add('bankUser', (bankCode, bankFromYear) => {
    cy.get('#bankCode-input').select(bankCode).should('have.class', 'ng-valid')
    cy.get('#bankFrom-input-year').type(bankFromYear).should('have.class', 'ng-valid')
})

Cypress.Commands.add('identityUser', (isPartner, gender, lastName, maidenName, firstName, dateOfBirthDay,dateOfBirthMouth, dateOfBirthYear, postalCode, city) => {
    cy.get(gender).check({ force: true }).should('be.checked')
    cy.get('#lastName-input').type(lastName).should('have.class', 'ng-valid')
    if(isPartner){
        cy.get('#maidenName-input').type(maidenName).should('have.class', 'ng-valid')
    }
    cy.get('#firstName-input').type(firstName).should('have.class', 'ng-valid')
    cy.get('#dateOfBirth-input-day').type(dateOfBirthDay)
    cy.get('#dateOfBirth-input-month').type(dateOfBirthMouth)
    cy.get('#dateOfBirth-input-year').type(dateOfBirthYear).should('have.class', 'ng-valid')
    cy.get('#postalCode-input').type(postalCode).should('have.class', 'ng-valid')
    cy.get('#city-input').select(city).should('have.class', 'ng-valid')
    
})
Cypress.Commands.add('contactUser', (cellPhoneNumber,phoneNumber,address,postalCode,city,countryZone) => {
    cy.get('#cellPhoneNumber-input').type(cellPhoneNumber).should('have.class', 'ng-valid')
    cy.get('#phoneNumber-input').type(phoneNumber).should('have.class', 'ng-valid')
    cy.get('#address-input').type(address).should('have.class', 'ng-valid')
    cy.get('#postalCode-input').type(postalCode).should('have.class', 'ng-valid')
    cy.get('#city-input').select(city).should('have.class', 'ng-valid')
    cy.get('#countryZone-input').select(countryZone).should('have.class', 'ng-valid')
})

Cypress.Commands.add('insuranceUser', (insurance_subscribers) => {
    cy.get('#insurance-subscribers-input').select(insurance_subscribers).should('have.class', 'ng-valid')
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
