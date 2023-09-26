import {loginPage} from "../../page_objects/loginPOM";

describe('Alarms component check', () =>{
    beforeEach('Url', () =>{
        cy.visit(Cypress.env('host'))
        loginPage.loginUser()
        //cy.get('.c-sidebar .icon-alarms').click() // Switch to Alarms component
        cy.visit(Cypress.env('host')+'/admin-panel/rules')

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

    
    it('Check Infographics', () =>{
        cy.wait(10000)
        cy.get('.swiper-wrapper').contains('Total rules')  // Total companies infographics
        cy.get('.swiper-wrapper').contains('Total active rules')  // Total companies infographics
        cy.get('.swiper-wrapper').contains('Total inactive rules')  // Total companies infographics
        cy.get('.icon-plus_circle').should('have.class','icon-plus_circle') // Add infographics
    })


    it('Check elements', () => {
        cy.url().should('contain', '\admin-panel/rules') // Uri correct
        cy.contains('h1','Rules') // Title present
        cy.get('xc-user-account-menu') // My account field present
        //cy.contains('') // First tab present

    })

    it('Check Search field', () => {
        cy.get('input[placeholder="Search ..."]') // Search field present

    })

    it('Check Search field filters - Naming', () => {
        cy.get('.c-flyout__filter-btn').click()
        cy.get('.c-flyout__header').should('contain', 'Rule filters')
        cy.get('.c-flyout__content').should('contain', 'State')
        cy.get('.c-flyout__content').should('contain', 'Alarm categories')
    })


    it('Check Search field filters - State group', () => {
        cy.get('.c-flyout__filter-btn').click()
        cy.wait(7000)
        cy.get('.o-form__group').eq(0).should('contain', 'Active')
        cy.get('.o-form__group').eq(0).should('contain', 'Inactive')
       
    })

    it('Check Search field filters - Alarm categories', () => {
        cy.get('.c-flyout__filter-btn').click()
        cy.get('.o-form__group').eq(1).should('contain', 'Performance')
        cy.get('.o-form__group').eq(1).should('contain', 'Energy')
        cy.get('.o-form__group').eq(1).should('contain', 'Wellness')
        cy.get('.o-form__group').eq(1).should('contain', 'AirQuality')
        cy.get('.o-form__group').eq(1).should('contain', 'Compliance')
    })


    it('Check Grid', () => {
        cy.wait(5000)
        cy.get('.c-table__row--head input[id="checkbox-1"]') //Check for "Checkbox" column
        cy.get('.c-table__row--head').contains('Name') //Check for "Name" column
        cy.get('.c-table__row--head').contains('State') //Check for "State" column
        cy.get('.c-table__row--head').contains('Alarm categories')  //Check for "Alam categories" column
        cy.get('.c-table__row--head').contains('Modified by')  //Check for "Modified by" column
        cy.get('.c-table__row--head').contains('Action')  //Check for "Action" column


    })

    // Logout
    it('Logout ', () => {
        cy.wait(5000) // Losing focus on DOM when other elements load (widgets, grid...), so increase wait time if logout fails, so that component could be loaded fully
        loginPage.logOutUser() 
        
    })

})

