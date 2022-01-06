describe('Search in wikipedia', function () {
    it('QA Automation ', function () {
        const anonymous_search = 'DevOps'
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput')
            .type(anonymous_search)

        cy.get('.pure-button')
            .click()

        cy.wait(500)
        cy.scrollTo(0, 500)

        cy.wait(500)
        cy.scrollTo(0, 1000)

        cy.wait(500)
        cy.scrollTo(0, 1500)

        cy.wait(500)
        cy.scrollTo(0, 2000)

        cy.scrollTo(0, 500)

        cy.viewport(550, 750)
        cy.viewport('iphone-6')
    })

})
