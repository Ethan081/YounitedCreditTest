describe('Single credit tests', () =>{

    beforeEach('connection site test', () =>{
        cy.visit('https://www.younited-credit.com/')
        cy.url().should('include', 'younited-credit')
        cy.document()
        cy.get('title')
            .should('contain', 'Le Crédit 100% en Ligne – Réponse en 24h | Younited Credit')
    })
    it('forget inquire projectSelect, amount, creditMaturity', () => {
        cy.contains('CONTINUER').click()
        cy.contains('Veuillez renseigner votre projet').should('be.visible')
        cy.contains('Veuillez renseigner le montant de votre projet').should('be.visible')
    })

    it('forget inquire projectSelect', () => {
        cy.get('#amount')
            .select('10000 €').should('have.value', '10K')
        cy.get('#creditMaturity')
            .select('60 mois').should('have.value', 'M60')
        cy.contains('CONTINUER').click()
        cy.contains('Veuillez renseigner votre projet').should('be.visible')
    })

    it('forget inquire amount', () => {
        cy.get('#projectSelect')
            .select('Véhicule neuf').should('have.value', 'NEWCAR')
        cy.get('#creditMaturity')
            .select('60 mois').should('have.value', 'M60')
        cy.contains('CONTINUER').click()
        cy.contains('Veuillez renseigner le montant de votre projet').should('be.visible')
    })

    it('forget inquire creditMaturity', () => {
        cy.get('#projectSelect')
            .select('Véhicule neuf').should('have.value', 'NEWCAR')
        cy.get('#amount')
            .select('10000 €').should('have.value', '10K')
        cy.contains('CONTINUER').click()
        cy.url().should('include', '/email')
        cy.get('title')
            .should('contain', 'Younited Credit') 
    })

    it('simulator-select past successfull', () => {
        cy.get('#projectSelect')
            .select('Véhicule neuf').should('have.value', 'NEWCAR')
        cy.get('#amount')
            .select('10000 €').should('have.value', '10K')
        cy.get('#creditMaturity')
            .select('60 mois').should('have.value', 'M60')
        cy.contains('CONTINUER').click()
        cy.url().should('include', '/email')
        cy.get('title')
            .should('contain','Younited Credit')
    })
    
})