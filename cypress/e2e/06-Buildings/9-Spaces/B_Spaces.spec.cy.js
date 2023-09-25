import { loginPage } from "../../../page_objects/loginPOM"

describe('Spaces component check', () =>{
    beforeEach('Url', () =>{
        cy.visit(Cypress.env('host'))
        loginPage.loginUser()
        cy.visit(Cypress.env('host')+'/admin-panel/buildings/spaces')
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

    it('Check elements of the component page', () => {
        cy.get('.o-container').contains('h1', 'Space information')  // Check title
        cy.get('label').contains('Building')
        cy.get('label').contains('Floor')
        cy.get('label').contains('Zone')
        cy.get('label').contains('Space name *')

        cy.get('.c-form-progress').contains('h4',' Space information ')
        cy.get('.c-form-progress').contains('h4','Space location')

        cy.get('button').contains('Cancel')
        cy.get('button').contains('Continue')

    })

        // Logout
    it('Logout ', () => {
            cy.wait(10000) // Losing focus on DOM when other elements load (widgets, grid...), so increase wait time if logout fails, so that component could be loaded fully
            loginPage.logOutUser() 
    })

})