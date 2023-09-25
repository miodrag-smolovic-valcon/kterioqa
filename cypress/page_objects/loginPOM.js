export default class LoginPage {

    //get email() { return cy.get('.u-relative').eq(0) }
    get email() { return cy.get('input[type="text"]') }
    //get password() { return cy.get('.u-relative').eq(1)}
    get password() { return cy.get('input[type="password"]')}

    get btnSingIn() { return cy.get('.c-button').contains(' Sign in ') }
    
    get btnForgotPass() { return cy.get('button').eq(0) }
    get forgotEmail(){ return cy.get('button').eq(0)}
    get btnSend(){ return cy.get('button').eq(0)}
    get btnBackToLogin() { return cy.get('button').eq(0)}
    get btnModalClose() { return cy.get('.icon-close')}




    //get btnDropDown1() { return cy.get(' .c-user-account-menu .m-l-10')}
    get btnDropDown1() { return cy.get('.c-user-account-menu button.c-dropdown-menu__btn')}
    //get btnSignOut() { return cy.get('.m-l-10').eq(4)}
    get btnSignOut() { return cy.get('.c-dropdown-menu').contains('Sign out')}  
    

    get url(){ return Cypress.env('host')}


    loginUser() {
        let email = Cypress.env('testUserEmail');
        let password = Cypress.env('testUserPass') // Login using mouse by clicking on "Sign in"

        this.email.type(email)
        this.password.type(password)
        loginPage.btnSingIn.click();
        cy.wait(2000)
        loginPage.btnModalClose.click() //Clearing modal
    }

    loginUserByKeyboard() {
        let email = Cypress.env('testUserEmail');
        let password = Cypress.env('testUserPass')+('{enter}') // Login using keyboard by pressing "Enter"

        this.email.type(email)
        this.password.type(password)
        cy.wait(2000)
        loginPage.btnModalClose.click() //Clearing modal
    }

    loginUserWithoutPass() {
        let email = Cypress.env('testUserEmail');
        this.email.type(email)

        loginPage.btnSingIn.click();
    }

    loginUserWithoutEmail() {
        let password = Cypress.env('testUserPass');
        this.password.type(password)

        loginPage.btnSingIn.click();
    }

    loginUserWithoutData() {

        loginPage.btnSingIn.click();
    }

    logOutUser() {
        loginPage.btnDropDown1.click()
        loginPage.btnSignOut.click()
    }
}

export const loginPage = new LoginPage();