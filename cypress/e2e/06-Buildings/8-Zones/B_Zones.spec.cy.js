import { loginPage } from "../../../page_objects/loginPOM"

describe('Zones component check', () =>{
    beforeEach('Url', () =>{
        cy.visit(Cypress.env('host'))
        loginPage.loginUser()
        cy.visit(Cypress.env('host')+'/admin-panel/buildings/zones')
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
        cy.get('.o-container').contains('h1', 'Zone Information')  // Check title
        cy.get('label').contains('Building')
        cy.get('label').contains('Floor')
        cy.get('label').contains('Zone name')

        cy.get('.c-form-progress').contains('h4','Zone Information')
        cy.get('.c-form-progress').contains('h4','Zone Location')

        cy.get('button').contains('Cancel')
        cy.get('button').contains('Continue')
    })

    it.only('Enter required fields and check second page', ()=> {
        cy.wait(2000)
        cy.get('button').contains('Select buildings').click()
        cy.get('input[placeholder="Search"]').type('AGFA')
        cy.wait(3000)
        cy.get('.c-select__option').contains('AGFA').click()
        cy.wait(2000)
        cy.get('span').contains('Select building first').click()
        cy.get('div.cdk-virtual-scroll-content-wrapper > div:nth-child(2)').click()

    })

        // Logout
    it('Logout ', () => {
            cy.wait(10000) // Losing focus on DOM when other elements load (widgets, grid...), so increase wait time if logout fails, so that component could be loaded fully
            loginPage.logOutUser() 
    })

})