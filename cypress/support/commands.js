// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { mainPage} from "../pages/homechallenge";
import { messagesTexts } from "../utils/messages";

Cypress.Commands.add("storeCommands", (mainPage) => {
    mainPage.visit();
    mainPage.getAcceptCookies().click()
    mainPage.getLogo().should('be.visible');
    mainPage.submitLoginId().click()
    mainPage.getIdfield().type(messagesTexts.idNumber)
    mainPage.submitLoginButton().click()
    mainPage.getProfileIcon().should('be.visible')
    mainPage.getFirstSpecialOffer().should('be.visible')
    mainPage.submitNextButton().click()
    mainPage.getNextSpecialOffer().should('be.visible')
    cy.scrollTo('bottom');
    cy.wait(5000)
    mainPage.submitLoadMore().click()
    cy.wait(5000)
    cy.scrollTo('bottom');
    mainPage.getLastItem().filter(':contains(" 70,000 ")').click()
    mainPage.submitCreditCard().click()
    cy.visit(messagesTexts.stripeUrl)
});