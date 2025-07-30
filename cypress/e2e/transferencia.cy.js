describe('Testes de Transferência', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.LogInWithValidCredentials()
    })
    it('Deve transferir quando informo dados e valores válidos', () => {
        // Act
        cy.MakeTransfer('Maria Oliveira','João da Silva','11')

        // Assert
        cy.CheckMessageInTheToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        // Act
        cy.MakeTransfer('Maria Oliveira','João da Silva','5000.01')

        // Assert
        cy.CheckMessageInTheToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})