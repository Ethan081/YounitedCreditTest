describe('Single credit tests', () =>{
    it('authentification test', () =>{
        cy.visit('https://customeridentity.younited-credit.com/login')
        cy.url().should('include', '/login')
    })
})