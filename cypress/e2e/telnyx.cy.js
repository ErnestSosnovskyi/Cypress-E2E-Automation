describe('Telnyx E2E Automation Tests', () =>{
    beforeEach(() => {
    });

    it('TC001 - Checking if the home page has loaded successfully', () => {
        cy.visit('https://telnyx.com');

        cy.get('header').should('be.visible');
        cy.get('main').should('be.visible');
        cy.get('h1').should('not.be.empty');
    });

    it('TC002 - Checking the transition to the registration page', () => {
        cy.visit('https://telnyx.com');

        cy.get('header').contains('Sign up').click();
        cy.url().should('include', '/sign-up');
        cy.get('form').should('be.visible');
        cy.contains('h1', 'Create your account').should('be.visible');
    });

    it('TC003 - Checking the validation of an empty registration form', () => {
        cy.visit('https://telnyx.com/sign-up');

        cy.get('button[type="submit"]').first().click({ force: true });
        cy.url().should('include', '/sign-up');       
        cy.get('input:invalid, [class*="error"], [class*="message"], [id*="error"]').should('exist');
    });

    it('TC004 - Checking if the pricing section opens on the main page', () => {
        cy.visit('https://telnyx.com');

        cy.get('header').contains('Pricing', { matchCase: false }).click();
        cy.contains('View all pricing', { matchCase: false }).click({ force: true });
        cy.url().should('include', '/pricing');
        cy.get('h1').should('be.visible');
    });

    it('TC005 - Checking access to the Voice API page', () => {
        cy.visit('https://telnyx.com');

        cy.get('header').contains('Products', { matchCase: false }).click();
        cy.contains('a', 'Voice API', { matchCase: false }).click({ force: true });
        cy.url().should('include', '/products/voice-api');
    });

    it('TC006 - Testing the "Talk to an expert" button', () => {
        cy.visit('https://telnyx.com/products/voice-api');

        cy.contains('Talk to an expert').click();
        cy.url().should('include', '/contact-us');
    });

    it('TC007 - Checking the redirect to the authorization portal', () => {
        cy.visit('https://telnyx.com');

        cy.get('header').contains('Log in').should('have.attr', 'href').and('include', 'portal.telnyx.com');
    });

    it('TC008 - Checking the Cookie Consent Banner', () => {
        cy.visit('https://telnyx.com');

        cy.get('[id*="cookie"], [class*="cookie"], [id*="onetrust"').should('be.visible');
        cy.contains('Accept').should('be.visible').and('not.be.disabled');
    });

    it('TC009 - Checking the "Terms and Conditions of Service" link', () => {
        cy.visit('https://telnyx.com');

        cy.get('footer').scrollIntoView().should('be.visible');
        cy.get('footer').contains('Terms and Conditions of Service').invoke('removeAttr', 'target').click();
        cy.url().should('include', '/terms-and-conditions-of-service');
    });

    it('TC010 - Checking for links to social networks', () => {
        cy.visit('https://telnyx.com');

        cy.get('footer').scrollIntoView().should('be.visible');
        cy.get('footer').find('a[href*="linkedin.com"]').should('have.attr', 'target', '_blank');
        cy.get('footer').find('a[href*="x.com"]').should('have.attr', 'target', '_blank');
        cy.get('footer').find('a[href*="facebook.com"]').should('have.attr', 'target', '_blank');
    });
});