Cypress.Commands.add('MakeTransfer', (contaOrigem, contaDestino, valor) => {
    cy.SelectOptionFromComboBox('conta-origem', contaOrigem)
    cy.SelectOptionFromComboBox('conta-destino', contaDestino)
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
})