// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('loginBare', () => {

    cy.log(`Logging in as kterioadmin@kterio.com`);
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: 'https://xena.aks-dev.kter.io/auth/login',
        body: {
            email : "kterioadmin@kterio.com",
            password : "Temp1234!"
        }})
        .then((resp) => {
            window.localStorage.setItem('jwt', resp.body.accessToken)
            console.log(resp);
            return resp.body.accessToken;
        })
})