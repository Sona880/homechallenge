class MainPage {
    visit(){
        cy.visit('https://demo-store-sandbox.appcharge.com');
    }

    getAcceptCookies(){
     return cy.get('.accept')
    }
    getLogo(){
        return  cy.get('#small')
    }
    submitLoginId(){
        return cy.get('.transparent')
    }
    getIdfield(){
        return cy.get('.sc-fPXMVe')
    }
    submitLoginButton(){
        return cy.get('.sc-cPiKLX')
    }
    getProfileIcon(){
        return cy.get('[src="https://media.appcharge.com/defaults/profile.png"]')
    }
    getFirstSpecialOffer(){
        return cy.get('.slick-current > :nth-child(1) > .carousel-item > .sc-kOHTFB > .backgroundImage')
    }
    submitNextButton(){
        return cy.get('.slick-arrow.slick-next')
    }
    getNextSpecialOffer(){
        return cy.get('[data-index="2"] > :nth-child(1) > .carousel-item > .sc-kOHTFB > .backgroundImage')
    }
    submitLoadMore(){
        return cy.get('.sc-gFqAkR')
    }
    getLastItem(){
        return cy.get('.container.MuiBox-root.css-0')
    }
    submitCreditCard(){
        return cy.get('.sc-gFqAkR')
    }
 
}

    export const mainPage = new MainPage();