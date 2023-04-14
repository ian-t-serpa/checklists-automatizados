Cypress.Commands.add('login', (email,senha) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="senha"]').type(senha, {log: false});
    cy.get('button[name="entrar"]').click();
})