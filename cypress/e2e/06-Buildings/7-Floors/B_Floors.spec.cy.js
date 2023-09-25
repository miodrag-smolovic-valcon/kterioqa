import { loginPage } from "../../../page_objects/loginPOM"

describe('Floors component check', () =>{
    beforeEach('Url', () =>{
        cy.visit(Cypress.env('host'))
        loginPage.loginUser()
        cy.visit(Cypress.env('host')+'/admin-panel/buildings/floors')
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

    it.only('Check elements of the component page', () => {
        cy.get('.o-container').contains('h1', 'Floor information')  // Check title
        cy.get('label').contains('Building')
        cy.get('label').contains('Floor number')
        cy.get('label').contains('Floor layout')

       // body > xc-root > xc-admin-panel > div > main > xc-buildings > xc-floor > xc-floor-wizard > div > div > div > section > div > xc-floor-form > form > div > div:nth-child(3) > div > div > xc-layout-item-upload > xc-upload-layout > div
        
        cy.get('xc-upload-layout > div').contains('h4','Drop your floor layout here or')

        cy.get('.c-form-progress #Oval')
        cy.get('.c-form-progress').contains('h4','Floor information')

        cy.get('button').contains('Cancel')
        cy.get('button').contains('Finish')

    })

        // Logout
    it('Logout ', () => {
            cy.wait(10000) // Losing focus on DOM when other elements load (widgets, grid...), so increase wait time if logout fails, so that component could be loaded fully
            loginPage.logOutUser() 
    })

})