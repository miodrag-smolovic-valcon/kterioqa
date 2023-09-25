import {loginPage} from "../../page_objects/loginPOM";

describe('Alarms component check', () =>{
    beforeEach('Url', () =>{
        cy.visit(Cypress.env('host'))
        loginPage.loginUser()
        //cy.get('.c-sidebar .icon-alarms').click() // Switch to Alarms component
        cy.visit(Cypress.env('host')+'/admin-panel/alarms')

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
        cy.url().should('contain', '\admin-panel/alarms') // Uri correct
        cy.contains('h1','Alarms') // Title present
        cy.get('xc-user-account-menu') // My account field present
        //cy.contains('') // First tab present

    })

    it('Check Search field', () => {
        cy.get('input[placeholder="Search ..."]') // Search field present

    })

    it('Check Search field filters - Naming', () => {
        cy.get('.c-flyout__filter-btn').click()
        cy.get('.c-flyout__header').should('contain', 'Alarm filters')
        cy.get('.c-flyout__content').should('contain', 'Alarm categories')
        cy.get('.c-flyout__content').should('contain', 'Asset types')
        cy.get('.c-flyout__content').should('contain', 'Buildings')
        cy.get('.c-flyout__content').should('contain', 'Urgency')
        cy.get('.c-flyout__content').should('contain', 'Acked')
        cy.get('.c-flyout__content').should('contain', 'Time frame')
        cy.get('.c-flyout__content').should('contain', 'Urgency')
       
    })


    it('Check Search field filters - Alarm category group', () => {
        cy.get('.c-flyout__filter-btn').click()
        cy.wait(5000)
        cy.get('.o-form__group').eq(0).should('contain', '- Select alarm categories -')
        cy.get('xc-multi-select[formcontrolname="categories"] .icon-arrow_downward').click()
        cy.get('.c-select__dropdown [placeholder="Search"]')
        cy.get('.c-select__dropdown').should('contain','Results')
        cy.get('.c-select__dropdown .c-checkbox__checkmark')
        cy.get('.c-flyout__content .icon-arrow_upward').click()
       
    })

    it('Check Search field filters - Asset types', () => {
        cy.get('.c-flyout__filter-btn').click()
        cy.get('.o-form__group').eq(1).should('contain', '- Select asset type -')
        cy.get('xc-multi-select[formcontrolname="categories"] .icon-arrow_downward').click()
        cy.get('.c-select__dropdown [placeholder="Search"]')
        cy.get('.c-select__dropdown').should('contain','Results')
        cy.get('.c-select__dropdown .c-checkbox__checkmark')
        cy.get('.c-flyout__content .icon-arrow_upward').click()
    })

    it('Check Search field filters - Buildings', () => {
        cy.get('.c-flyout__filter-btn').click()
        cy.get('.o-form__group').eq(2).should('contain', '- Select buildings -')
        cy.get('xc-multi-select[formcontrolname="categories"] .icon-arrow_downward').click()
        cy.get('.c-select__dropdown [placeholder="Search"]')
        cy.get('.c-select__dropdown').should('contain','Results')
        cy.get('.c-select__dropdown .c-checkbox__checkmark')
        cy.get('.c-flyout__content .icon-arrow_upward').click()
    })


    it('Check Search field filters - Urgency', () => {
        cy.get('.c-flyout__filter-btn').click()
        cy.get('.e-label').eq(3).should('contain', 'Urgency')
        cy.get('.o-form__group').eq(3).should('contain', 'Low')
        cy.get('.o-form__group').eq(3).should('contain', 'Medium')
        cy.get('.o-form__group').eq(3).should('contain', 'High')

        cy.get('.o-form__group label input').eq(1)
    })



    it.skip('Check Grid', () => {
        cy.wait(5000)
        cy.get('.c-table__row--head input[id="checkbox-1"]') //Check for "Checkbox" column
        cy.get('.c-table__row--head').contains('Occurred') //Check for "Occured" column
        cy.get('.c-table__row--head').contains('Asset source') //Check for "Asset source" column
        cy.get('.c-table__row--head').contains('Building')  //Check for "Building" column
        cy.get('.c-table__row--head').contains('Category')  //Check for "Category" column
        cy.get('.c-table__row--head').contains('Acked')  //Check for "Acked" column
        cy.get('.c-table__row--head').contains('Action')  //Check for "Action" column


    })

    // Logout
    it('Logout ', () => {
        cy.wait(5000) // Losing focus on DOM when other elements load (widgets, grid...), so increase wait time if logout fails, so that component could be loaded fully
        loginPage.logOutUser() 
        
    })

})

