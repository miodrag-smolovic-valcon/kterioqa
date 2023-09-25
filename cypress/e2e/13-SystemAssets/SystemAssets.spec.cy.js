import { loginPage } from "../../page_objects/loginPOM";

describe('System assets component check', () =>{
    beforeEach('Url', () =>{
        cy.visit(Cypress.env('host'))
        loginPage.loginUser()
        //cy.get('a[href*="/admin-panel/sites"]').click() 
        cy.visit(Cypress.env('host')+'/admin-panel/system-assets')
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

    it('Check elements', () => {
        cy.url().should('contain', '\admin-panel/system-assets') // Uri correct
        cy.contains('h1','System Assets') // Title present
        cy.get('xc-user-account-menu .c-user-account-menu') // My account field present
    })

    it('Check Search field', () => {
        cy.get('input[placeholder="Search system assets"]') // Search field present

    })

    it('Check Infographics', () =>{
        cy.wait(10000)
        cy.contains('Total system assets')  // Total system assets infographics
        cy.contains('Total assets')  // Total assets infographics
        cy.get('.icon-plus_circle').should('have.class','icon-plus_circle') // Add infographics
    })

    it('Check Grid', () => {
        
        cy.wait(10000)
        cy.get('.c-table__row--head').contains('System asset') //Check for "System assets" column
        cy.get('.c-table__row--head').contains('Building')  //Check for "Buildings" column
        cy.get('.c-table__row--head').contains('System types') //Check for "System types" column
        cy.get('.c-table__row--head').contains('Assets')  //Check for "Assets" column
        cy.get('.c-table__row--head').contains('Action')  //Check for "Action" column

    })

    // Logout
    it('Logout ', () => {
        cy.wait(10000) // Losing focus on DOM when other elements load (widgets, grid...), so increase wait time if logout fails, so that component could be loaded fully
        loginPage.logOutUser() 
        
    })

})