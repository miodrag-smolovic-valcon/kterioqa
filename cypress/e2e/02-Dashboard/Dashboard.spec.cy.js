import { loginPage } from "../../page_objects/loginPOM"
import { dashboardPage } from "../../page_objects/dashboardPOM"


describe('Dashboard component check', () =>{
    beforeEach('Url', () =>{
        cy.visit(Cypress.env('host'))
        loginPage.loginUser()
        cy.url().should('contain', 'admin-panel/dashboard')
    })

    it('Testing Succesfull login modal', () => {
        //cy.contains('You have succesfully loged in')
        cy.get('.c-toast--success') // Modal successfully shown
    })

    it('Check elements', () => {
        cy.contains('h1','Dashboard')
        cy.get('xc-user-account-menu')
        cy.contains('Overview') // First tab present

    })

    it('Check Company.s Logo', () =>{
        cy.get('.c-sidebar__default-comp') // Check presense of company placeholder
        cy.get('.c-sidebar__logo') // Check presence of company's logo
    })

    it('Check sidebar menu', () =>{

        cy.get('.c-sidebar .icon-dashboard') // Check Dashboard icon
        cy.get('.c-sidebar .icon-companies') // Check Companies
        cy.get('.c-sidebar .icon-users ') // Check Company users
        cy.get('.c-sidebar .icon-sites') // Check Sites
        cy.get('.c-sidebar .icon-arrow_downward').eq(0).click() // Check sub-menu

        cy.get('.c-sidebar .icon-floors') // Check Floors
        cy.get('.c-sidebar .icon-zones') // Check Zones
        cy.get('.c-sidebar .icon-spaces') // Check Spaces

        cy.get('.c-sidebar .icon-arrow_upward').eq(0).click() // Close sub-menu
        
        cy.get('.c-sidebar .icon-alarms') // Check Alarms
        cy.get('.c-sidebar .icon-rules') // Check Rules
        cy.get('.c-sidebar .icon-system-assets') // Check System Assets
        cy.get('.c-sidebar .icon-assets') // Check Assets
        cy.get('.c-sidebar .icon-arrow_downward').eq(1).click() // Check sub-menu
        cy.get('.c-sidebar .icon-sub-assets') // Check Subassets
        cy.get('.c-sidebar .icon-arrow_upward').eq(0).click() // Close sub-menu
        
    })


    it('Check Infographics', () => {
        cy.wait(6000)
        cy.contains('Total buildings') //Mandatory infographics
        cy.contains('Total electricity consumption') //Mandatory infographics
        cy.contains('Total energy consumption') //Mandatory infographics

    })

    // Logout
    it('Logout ', () => {
            loginPage.logOutUser()
    })
})

