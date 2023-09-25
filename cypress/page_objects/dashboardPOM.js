export default class DashboardPage {

    get title(){ return cy.get('h1', 'Dashboard')}
    get searchBar(){ return cy.get('.u-relative').eq(0)}

    // get company(){ return cy.get('.c-sidebar__default-comp')}
    // get logo(){ return cy.get('.c-sidebar__logo')}
    
    // checkLogo(){
    //     cy.contains(this.company)
    //     cy.contains(this.logo)
    
    // }



}

export const dashboardPage = new DashboardPage();