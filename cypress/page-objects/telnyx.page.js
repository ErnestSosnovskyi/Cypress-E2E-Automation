/// <reference types="cypress" />

class TelnyxPage {
    visitHome() { cy.visit('/'); }
    visitSignUp(url) { cy.visit(url); }
    visitVoiceApi(url) { cy.visit(url); }

    getHeader() { return cy.get('header'); }
    getMain() { return cy.get('main'); }
    getH1() { return cy.get('h1'); }
    getFooter() { return cy.get('footer'); }

    clickSignUpBtn() { this.getHeader().contains('Sign up').click({ force: true }); }
    clickPricingLink() { cy.get('a[href="/pricing"]').first().click({ force: true }); }
    clickVoiceApiLink(url) { cy.get(`a[href="${url}"]`).first().click({ force: true }); }
    clickTalkToExpert() { cy.contains('Talk to an expert').click({ force: true }); }

    submitForm() { cy.get('button[type="submit"]').first().click({ force: true }); }
    getFormValidationErrors() { return cy.get('input:invalid, [class*="error"], [class*="message"], [id*="error"]'); }

    getCookieBanner() { return cy.get('[id*="cookie"], [class*="cookie"], [id*="onetrust"]'); }
    acceptCookies() { cy.contains('Accept').click({ force: true }); }

    clickTermsLink() { this.getFooter().contains('Terms and Conditions of Service').invoke('removeAttr', 'target').click({ force: true }); }
}

export default new TelnyxPage();