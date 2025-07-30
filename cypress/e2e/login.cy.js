describe('Testes de Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('/')
  })
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Act
    cy.LogInWithValidCredentials()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Act
    cy.LogInWithInvalidCredentials()

    //Assert
    cy.CheckMessageInTheToast('Erro no login. Tente novamente.')
  })
})