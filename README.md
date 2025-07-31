# banco-web-tests

Projeto de testes automatizados com Cypress e JavaScript, desenvolvido para estudo e prática durante a Mentoria 2.0 do Júlio de Lima.

## Objetivo

O objetivo deste projeto é praticar e aprofundar conhecimentos em automação de testes end-to-end utilizando Cypress, com foco em organização de código, uso de custom commands e geração de relatórios automatizados.

## Componentes do Projeto

- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de ações comuns nos testes, localizados em `cypress/support/commands/`.
- **Relatórios**: Geração de relatórios automáticos com o `cypress-mochawesome-reporter`, disponíveis em `cypress/reports/html/`.
- **Testes**: Scripts de teste localizados em `cypress/e2e/`.
- **Fixtures**: Dados de teste em `cypress/fixtures/`.

## Pré-requisitos

- Node.js instalado
- API (`banco-api`) https://github.com/juliodelimas/banco-api em execução 
- Aplicação web (`banco-web`) https://github.com/juliodelimas/banco-web em execução

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/amandavruiz/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução dos Testes

1. Certifique-se de que a API (`banco-api`) e a aplicação web (`banco-web`) estão rodando.
2. Execute os testes com o comando:
   ```sh
   npx cypress run
   ```
   Ou abra o Cypress interativamente:
   ```sh
   npx cypress open
   ```
3. Os relatórios em HTML serão gerados em `cypress/reports/html/index.html`.

## Estrutura dos Testes

- `cypress/e2e/login.cy.js`: Testes relacionados ao login do usuário.
- `cypress/e2e/transferencia.cy.js`: Testes relacionados à funcionalidade de transferência bancária.

## Custom Commands

Os custom commands estão organizados em:
- `cypress/support/commands/common.js`: Comandos comuns reutilizáveis.
- `cypress/support/commands/login.js`: Comandos específicos para login.
- `cypress/support/commands/transferencia.js`: Comandos para operações de transferência.

## Relatórios

Os relatórios são gerados automaticamente após a execução dos testes e podem ser acessados em `cypress/reports/html/index.html`.