Cypress.Commands.add('CheckMessageInTheToast', message => {
    cy.get('.toast').should('be.visible').should('have.text', message)
})

Cypress.Commands.add('SelectOptionFromComboBox', (fieldLabel,option) => {
    cy.get(`label[for="${fieldLabel}"]`).parent().as(`campo-${fieldLabel}`)
        cy.get(`@campo-${fieldLabel}`).click()
        cy.get(`@campo-${fieldLabel}`).contains(`${option}`).click()
})