describe('subscrib credit for single', () =>{
    
    beforeEach('connect to email page', () =>{
        cy.visit('https://www.younited-credit.com/')
        cy.url().should('include', 'younited-credit')
        cy.document()
        cy.get('title')
            .should('contain', 'Le Crédit 100% en Ligne – Réponse en 24h | Younited Credit')
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
    it('email <input> empty', () =>{
        cy.get('#email-input').should('be.empty')
        cy.contains('Voir mon offre personnalisée').click()
        cy.contains('Merci de renseigner cette information pour poursuivre votre demande.').should('be.visible')

    })
    it('email authenfification valid', () =>{
        cy.get('#email-input').type('ziegelmeyer.etienne@yahoo.fr').should('have.value', 'ziegelmeyer.etienne@yahoo.fr')
        cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
        cy.contains('Voir mon offre personnalisée').click()
        

    })
})