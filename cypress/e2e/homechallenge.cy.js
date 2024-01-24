import { mainPage } from "../pages/homechallenge";
import { messagesTexts } from "../utils/messages";

describe('Home Page Tests', () => {
  it('should load the home page and verify elements', () => {
    mainPage.visit();
    cy.storeCommands(mainPage);
  })
});
