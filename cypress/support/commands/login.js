Cypress.Commands.add('LogInWithValidCredentials', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.valida.usuario)
        cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('LogInWithInvalidCredentials', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.invalida.usuario)
        cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
})