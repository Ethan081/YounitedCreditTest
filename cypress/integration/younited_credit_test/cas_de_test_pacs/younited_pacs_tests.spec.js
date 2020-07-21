describe('Pacs credit tests', () =>{
    let profile = require('../../../fixtures/pacsProfile')
    before('connection site test', () =>{
        cy.visit('https://www.younited-credit.com/')
        cy.url()
            .should('include', 'younited-credit')
        cy.get('title')
            .should('contain', 'Le Crédit 100% en Ligne – Réponse en 24h | Younited Credit')
    })

    it('landing page', () =>{
        cy.landingchooseUser(profile.projectSelect, profile.amount, profile.creditMaturity)
        cy.buttonClick('CONTINUER')
    })

    it('Email page', () =>{
        cy.urlWebSite('/email')
        cy.pageTitle('Younited Credit')
        cy.emailUser(profile.email)
        cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
        cy.buttonClick('Voir mon offre personnalisée')
    })
    
    it('Family situation page', () =>{
        cy.urlWebSite('/familysituation')
        cy.pageTitle('Younited Credit')
        cy.familySituationUser(profile.maritalStatus,profile.childNumber)
        cy.get('[type="checkbox"]')
            .uncheck({force:true}) 
        cy.buttonClick('Suite')
    })
    it('House page', () =>{
        cy.urlWebSite('/housing')
        cy.pageTitle('Younited Credit')
        cy.housingStatusUser(profile.housingStatus, profile.housingStatusMouth, profile.housingStatusYear)
        cy.get('[type="checkbox"]').uncheck({force:true}) 
        cy.buttonClick('Suite')
    })
    it('Professional situation Test', () =>{
        cy.urlWebSite('/professionalsituation')
        cy.pageTitle('Younited Credit')
        cy.activityPacsUser(profile.activitySector, profile.profession, profile.pensionFromMouth, profile.pensionFromYear)
        cy.get('#ISCOMPANYBANKRUPT_FALSE')
            .check({ force: true })
            .should('be.checked')
        cy.buttonClick('Suite')
    })
    it('Partner Activity Sector Test', () =>{
        cy.urlWebSite('/partnerprofession')
        cy.pageTitle('Younited Credit')
        cy.partnerActivityPacsUser(profile.partnerActivitySector, profile.partnerProfession,profile.partnerPensionFromMouth, profile.partnerPensionFromYear)
        cy.buttonClick('Suite')
        
    })
    it('Main Income Test', () =>{
        cy.urlWebSite('/incomes')
        cy.pageTitle('Younited Credit')
        cy.partnerIncomMariedUser(profile.mainIncome, profile.coIncome,profile.housingAssistance, profile.additionalIncome)
        cy.buttonClick('Suite')
    })
    it('Rent Amount Test', () =>{
        cy.urlWebSite('/outcomes')
        cy.pageTitle('Younited Credit')
        cy.outcomeMariedUser(profile.rentAmount, profile.childSupportPaymentsAmount, profile.childCareExpensesAmount, profile.loanCount)
        cy.buttonClick('Suite')
    })
    it('Bank Test', () =>{
        cy.urlWebSite('/bank')
        cy.pageTitle('Younited Credit')
        cy.bankUser(profile.bankCode, profile.bankFromYear)
        cy.buttonClick('Suite')
    })
    it('Identity Test', () =>{
        cy.urlWebSite('/identity')
        cy.pageTitle('Younited Credit')
        cy.identityUser(profile.gender, profile.lastName, profile.firstName, profile.dateOfBirthDay,profile.dateOfBirthMouth, profile.dateOfBirthYear, profile.postalCode, profile.city)
        cy.buttonClick('Suite')
    })
    it('Partner Identity Test', () =>{
        cy.urlWebSite('/partneridentity')
        cy.pageTitle('Younited Credit')
        cy.identityPartnerPacsUser(profile.partnerGender, profile.partnerLastName, profile.partnerFirstName, profile.partnerDateOfBirthDay,profile.partnerDateOfBirthMouth, profile.partnerDateOfBirthYear, profile.partnerPostalCode, profile.partnerCity)
        cy.buttonClick('Suite')
    })

    it('Identity Test', () =>{
        cy.urlWebSite('/contact')
        cy.pageTitle('Younited Credit')
        cy.contactUser(profile.cellPhoneNumber,profile.phoneNumber,profile.address,profile.postalCode,profile.city,profile.countryZone)
        cy.buttonClick('Suite')
    })
    it('Assurance Test', () =>{
            cy.urlWebSite('/offers')
            cy.pageTitle('Younited Credit')
            cy.insuranceUser(profile.insurance_subscribers)
            cy.buttonClick('Suite')
    })
    it('Whithout Assurance Test', () =>{
        cy.buttonClick('Continuer sans assurance')
    })
    it('Commercial Offer Test', () =>{
        cy.urlWebSite('/modify-offer')
        cy.pageTitle('Younited Credit')
    })
})