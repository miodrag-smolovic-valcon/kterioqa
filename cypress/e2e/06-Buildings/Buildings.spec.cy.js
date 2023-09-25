import {loginPage} from "../../page_objects/loginPOM";

describe('Buildings component check', () =>{
    beforeEach('Url', () =>{
        cy.visit(Cypress.env('host'))
        loginPage.loginUser()
        cy.get('.c-sidebar .icon-buildings').click() // Switch to Buildings component

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
        cy.url().should('contain', '\admin-panel/buildings') // Uri correct
        cy.contains('h1','Buildings') // Title present
        cy.get('xc-user-account-menu') // My account field present
        //cy.contains('') // First tab present

    })

    it('Check Search field', () => {
        cy.get('input[placeholder="Search buildings"]') // Search field present

    })

    it('Check Search field types', () => {
        cy.get('.c-sidebar .icon-buildings').click() // Switch to Companies component
        cy.get('.u-relative .icon-arrow_downward').eq(0).click()
        cy.wait(10000) // Waiting fetch response from BE, should be removed in BE mocked scenario (using fixtures)
        cy.contains('.c-dropdown-menu__search-link','All types')
        cy.contains('.c-dropdown-menu__search-link','Entertainment')
        cy.contains('.c-dropdown-menu__search-link','Hotel')
        cy.contains('.c-dropdown-menu__search-link','Industrial')
        cy.contains('.c-dropdown-menu__search-link','Office')
        cy.contains('.c-dropdown-menu__search-link','Retail')
    })


    it('Check Infographics', () =>{
        cy.wait(10000)
        cy.contains('Total buildings')  // Total companies infographics
        cy.get('.icon-plus_circle').should('have.class','icon-plus_circle') // Add infographics
    })

    it('Check Grid', () => {
        cy.wait(10000)
        cy.get('.c-table__row--head').contains('Building name') //Check for "Company user" column
        cy.get('.c-table__row--head').contains('Address') //Check for "Type" column
        cy.get('.c-table__row--head').contains('Type')  //Check for "Managed by" column
        cy.get('.c-table__row--head').contains('Company')  //Check for "Companies" column
        cy.get('.c-table__row--head').contains('Action')  //Check for "Action" column


    })

    // Logout
    it('Logout ', () => {
        cy.wait(10000) // Losing focus on DOM when other elements load (widgets, grid...), so increase wait time if logout fails, so that component could be loaded fully
        loginPage.logOutUser() 
        
    })

})

