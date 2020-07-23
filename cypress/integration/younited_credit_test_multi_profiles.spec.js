let profiles = require('../fixtures/profiles')

profiles.forEach(profile => {

    describe(`Younited-credit tests: ${profile.name}`, () =>{

        
        it('landing page', () =>{
            cy.visit('https://www.younited-credit.com')
            cy.urlWebSite('younited-credit')
            cy.pageTitle( 'Le Crédit 100% en Ligne – Réponse en 24h | Younited Credit')
            cy.landingchooseUser(profile.landingStep)
            cy.buttonClick('CONTINUER')
        })

        it('Email page', () =>{
            cy.urlWebSite('/email')
            cy.pageTitle('Younited Credit')
            cy.wait(3000)
            cy.emailUser(profile.identityStep)
            cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
            cy.buttonClick('Voir mon offre personnalisée')
        })
        
        it('Family situation page', () =>{
            cy.urlWebSite('/familysituation')
            cy.pageTitle('Younited Credit')
            cy.familySituationUser(profile.identityStep)
            cy.get('[type="checkbox"]')
                .uncheck({force:true}) 
            cy.buttonClick('Suite')
        })
        it('House page', () =>{
            cy.urlWebSite('/housing')
            cy.pageTitle('Younited Credit')
            cy.housingStatusUser(profile.houseStep)
            cy.get('[type="checkbox"]').uncheck({force:true}) 
            cy.buttonClick('Suite')
        })
        it('Professional situation Test', () =>{
            cy.urlWebSite('/professionalsituation')
            cy.pageTitle('Younited Credit')
            cy.activitySingleUser(profile.activityStatus, profile.activityStep)
            cy.get('#ISCOMPANYBANKRUPT_FALSE')
                .check({ force: true })
                .should('be.checked')
            cy.buttonClick('Suite')
        })

        if(profile.identityStep.maritalStatus !== "SINGLE"){
            it('Partner Activity Sector Test', () =>{
                cy.urlWebSite('/partnerprofession')
                cy.pageTitle('Younited Credit')
                cy.partnerActivityMariedUser(profile.partnerActivityStatus, profile.partnerActivityStep)
                cy.buttonClick('Suite')
                
            })
        }
        it('Main Income Test', () =>{
            cy.urlWebSite('/incomes')
            cy.pageTitle('Younited Credit')
            cy.incomUser(profile.mariedStatus, profile.activityStep, profile.houseStep, profile.partnerActivityStep)
            cy.buttonClick('Suite')
        })
        it('Rent Amount Test', () =>{
            cy.urlWebSite('/outcomes')
            cy.pageTitle('Younited Credit')
            cy.outcomeUser(profile.houseStatus, profile.houseStep)
            cy.buttonClick('Suite')
        })
        it('Bank Test', () =>{
            cy.urlWebSite('/bank')
            cy.pageTitle('Younited Credit')
            cy.bankUser(profile.bankStep)
            cy.buttonClick('Suite')
        })
        it('Identity Test', () =>{
            cy.urlWebSite('/identity')
            cy.pageTitle('Younited Credit')
            cy.identityUser(profile.identityStep)
            cy.buttonClick('Suite')
        })
        if(profile.identityStep.maritalStatus !== "SINGLE"){
            it('Identity Partner Test', () =>{
                cy.urlWebSite('/partneridentity')
                cy.pageTitle('Younited Credit')
                cy.identityPartnerUser(profile.partnerStatus, profile.partnerIdentityStep)
                cy.buttonClick('Suite')
            })
        }
        it('Contact Test', () =>{
            cy.urlWebSite('/contact')
            cy.pageTitle('Younited Credit')
            cy.contactUser( profile.identityStep)
            //cy.buttonClick('Suite')
        }) 
    })
})