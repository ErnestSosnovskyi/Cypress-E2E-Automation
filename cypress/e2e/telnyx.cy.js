import telnyxPage from '../page-objects/telnyx.page';

describe('Telnyx E2E Automation Tests', () => {
    let testData;

    before(() => {
        cy.fixture('testData').then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('TC001 - Checking if the home page has loaded successfully', () => {
        telnyxPage.visitHome();

        telnyxPage.getHeader().should('be.visible');
        telnyxPage.getMain().should('be.visible');
        telnyxPage.getH1().should('not.be.empty');
    });

    it('TC002 - Checking the transition to the registration page', () => {
        telnyxPage.visitHome();

        telnyxPage.clickSignUpBtn();
        cy.url().should('include', testData.urls.signUp);
        cy.get('form').should('be.visible');
        cy.contains('h1', 'Create your account').should('be.visible');
    });

    it('TC003 - Checking the validation of an empty registration form', () => {
        telnyxPage.visitSignUp(testData.urls.signUp);

        telnyxPage.submitForm();
        cy.url().should('include', testData.urls.signUp);       
        telnyxPage.getFormValidationErrors().should('exist');
    });

    it('TC004 - Checking if the pricing section opens on the main page', () => {
        telnyxPage.visitHome();

        telnyxPage.clickPricingLink();
        cy.url().should('include', testData.urls.pricing);
        telnyxPage.getH1().should('be.visible');
    });

    it('TC005 - Checking access to the Voice API page', () => {
        telnyxPage.visitHome();

        telnyxPage.clickVoiceApiLink(testData.urls.voiceApi);
        cy.url().should('include', testData.urls.voiceApi);
    });

    it('TC006 - Testing the "Talk to an expert" button', () => {
        telnyxPage.visitVoiceApi(testData.urls.voiceApi);

        telnyxPage.clickTalkToExpert();
        cy.url().should('include', testData.urls.contactUs);
    });

    it('TC007 - Checking the redirect to the authorization portal', () => {
        telnyxPage.visitHome();

        telnyxPage.getHeader().contains('Log in').should('have.attr', 'href').and('include', testData.urls.portal);
        cy.loginToPortal(testData.credentials.email, testData.credentials.password);
    });

    it('TC008 - Checking the Cookie Consent Banner', () => {
        telnyxPage.visitHome();

        telnyxPage.getCookieBanner().should('be.visible');
        telnyxPage.acceptCookies();
    });

    it('TC009 - Checking the "Terms and Conditions of Service" link', () => {
        telnyxPage.visitHome();

        telnyxPage.getFooter().scrollIntoView().should('be.visible');
        telnyxPage.clickTermsLink();
        cy.url().should('include', testData.urls.terms);
    });

    it('TC010 - Checking for links to social networks', () => {
        telnyxPage.visitHome();

        telnyxPage.getFooter().scrollIntoView().should('be.visible');
        telnyxPage.getFooter().find('a[href*="linkedin.com"]').should('have.attr', 'target', '_blank');
        telnyxPage.getFooter().find('a[href*="x.com"]').should('have.attr', 'target', '_blank');
        telnyxPage.getFooter().find('a[href*="facebook.com"]').should('have.attr', 'target', '_blank');
    });
});