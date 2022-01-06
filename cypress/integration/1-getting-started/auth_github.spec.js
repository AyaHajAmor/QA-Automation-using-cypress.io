describe('Login Github', function () {
    it('login success : password correct', function () {
        const email = 'chtiouichayma13@gmail.com'
        const password = 'Test.Test.2022'
        cy.visit('https://github.com/login')

        cy.get('.js-login-field')
            .type(email)
        cy.get('.js-password-field')
            .type(password)
        cy.get('.btn')
            .click()

        cy.url()
            .should('contain', 'https://github.com/')

        cy.get('[class="Header-item position-relative mr-0 d-none d-md-flex"]').click();
        cy.wait(1000)

        cy.get('.logout-form > .dropdown-item').click();
        cy.wait(500)
    })
    it('login failed : password incorrect', function () {
        const email = 'chtiouichayma13@gmail.com'
        const password = 'Test.Test.2020'
        cy.visit('https://github.com/login')

        cy.get('.js-login-field')
            .type(email)

        cy.get('.js-password-field')
            .type(password)

        cy.get('.btn')
            .click()

        cy.url()
            .should('contain', 'https://github.com/')

        cy.get('.flash > .container-lg')
            .contains('Incorrect username or password')

    })
    it('Empty faileds', function () {
        const email = ' '
        const password = ' '
        cy.visit('https://github.com/login')

        cy.get('.js-login-field')
            .type(email)

        cy.get('.js-password-field')
            .type(password)

        cy.get('.btn')
            .click()

        cy.url()
            .should('contain', 'https://github.com/')

        cy.get('.flash > .container-lg')
            .contains('Incorrect username or password')
    })
})
