import { loginPage } from "../../../page_objects/loginPOM"
import qcast from '../../../support/qcast'

describe('Assets component check', () =>{
    beforeEach('Url', () =>{
       //cy.loginBare() //testing
       //cy.visit(Cypress.env('host'))
       //loginPage.loginUser()
       // cy.visit(Cypress.env('host')+'/admin-panel/sub-assets/create')
       // cy.wait(4000)
    })

    // it('Login', ()=> {
    //         cy.log(`Logging in as kterioadmin@kterio.com`);
    //         cy.request({
    //             method: 'POST',
    //             failOnStatusCode: false,
    //             url: 'https://callisto.aks-dev.kter.io/api/auth/login',
    //             body: {
    //                 email : "kterioadmin@kterio.com",
    //                 password : "Temp1234!"
    //             }})
    //             .then((resp) => {
    //                 console.log(resp.body.accountCompanies.accessToken)
    //                 window.localStorage.setItem('jwt', resp.body.accessToken)
    //                 console.log(resp);
    //                 return resp.body.accessToken;
    //             })
    // })
    
    // it.skip('Login', ()=> {
    //         cy.log(`Logging in as kterioadmin@kterio.com`);
    //         cy.request('https://xena.aks-dev.kter.io/login')

    // })


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
        cy.url().should('contain', '\admin-panel/sub-assets/create') // Uri correct
        cy.get('.o-form__content').contains('h1','Subasset information') // Title present
        cy.get('.c-form-progress').contains('h4','Subasset information') // Subtitle present
        //cy.get('.c-form-progress').contains('h4','Subasset information') // Subtitle present

        cy.get('.c-form-progress').contains('h4','Subasset configuration') // Subtitle present
        cy.get('.c-form-progress button').contains('Continue') // Button Continue present
        cy.get('.c-form-progress button').contains('Cancel') // Button Cancel present

    })

    it('Check second page', () => {
        cy.get('input[placeholder="Insert subasset name"]').type('Testing Subasset creation'+ qcast.generisiSifru(10))
        cy.contains('span','Select buildings').click()
        cy.get('input[placeholder="Search"]').type('AGFA')
        cy.wait(2000)
        cy.get('div.cdk-virtual-scroll-content-wrapper > div:nth-child(1)').click()
        //cy.get('.c-form-progress__buttons > button:nth-child(2)').click() //Alternative selector for button
        cy.get('button').contains('Continue').click()

        //Check second prage
        cy.get('.o-container').contains('h1','Subasset configuration')  //Check title
        cy.get('.o-content .o-row').contains('Asset *') //Field title
        cy.get('body')
        .then((res) => {
            if (res.indexOf('- Select asset -') > -1){
                return ('- Select asset -')
            }
                   
            if ( res.find(function(el){
                console.log(el)
                return (el == '- Select subasset type -')
            }));

        })
        // cy.get('.o-content button > span').contains('- Select asset -') //First input field

        // cy.get('.o-content .o-row').contains('Subasset type *') // Field title
        // cy.get('.o-content button > span').contains('- No items in the list -') //Second input field - empty

        // cy.get('.o-content .o-row').contains('Application types') // Field title
        // cy.get('.o-content button > span').contains('- No items in the list -') //Third input field - empty

        // cy.get('.o-content .o-row').contains('Asset attributes') // Field title
        // cy.get('.o-content button > span').contains('- No items in the list -') //Fourth input field - empty

       
    })


    // Logout
    it('Logout ', () => {
        cy.get('xc-sidebar-header a[href="/"]').click()
        cy.wait(10000) // Losing focus on DOM when other elements load (widgets, grid...), so increase wait time if logout fails, so that component could be loaded fully
        loginPage.logOutUser() 
        
    })

})