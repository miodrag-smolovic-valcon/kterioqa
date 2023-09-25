import {loginPage} from '../../page_objects/loginPOM';

describe('Login check', () => {
    beforeEach('Login page', () => {
       // cy.viewport(1500,800) // Define viewport for this particular test, it could be done globally in cypress.config.js
        cy.visit(loginPage.url)
        cy.url().should('contain', '\login')
       
    })

    //Check elements

    it('Check page title', () =>{
        cy.title().should('eq', 'XenaCallisto')

    })

    
    it('Contains greeting text', () => {
        cy.contains('Email address')
        
    })

    it('Link to Forgot password', () =>{
        cy.contains('Forgot password')
        .should('have.attr', 'href', '/forgot-password')

    })
   

    //Positive

    // it.skip('Login successful', () => {
    //     //cy.contain('Type personal email').type('kterioadmin@kterio.com')
    //     cy.get('[placeholder="Type personal email"]').type('kterioadmin@kterio.com')
    //     cy.get('[placeholder="Type password"]').type('Temp1234!')
    //     cy.contains(' Sign in ').click()
    //     cy.contains('h1', 'Dashboard')
    //     //cy.get('.c-dropdown-menu__btn ng-tns-c158-5').click()
    //     cy.contains('Sign out').click({force:true})
    // });

    it('Login successful using mouse', () => {
     loginPage.loginUser();
    })

    it('Login successful using keyboard', () => {
     loginPage.loginUserByKeyboard();
    })


    //Negative

    it('Requires email', () => {
       loginPage.loginUserWithoutEmail()
       cy.get('.u-text-error').should('contain', 'This is a required field')
       cy.get('[placeholder="Type personal email"]').should('be.empty')

    })

    it('Requires password', () =>{
        loginPage.loginUserWithoutPass()
        cy.get('.u-text-error').should('contain', 'This is a required field')
        cy.get('[placeholder="Type password"]').should('be.empty')

    })

    it('Requires email and password', () =>{

        loginPage.loginUserWithoutData()
    })


    // Logout
    it('Logout ', () => {
        loginPage.loginUser()
        cy.wait(10000)
        loginPage.logOutUser()
    })
    

});