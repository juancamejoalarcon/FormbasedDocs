describe('Home page', () => {
    it('Visit Automatik Docs Home page', () => {
        cy.visit('/')
    })
    describe('Test navbar', () => {
        it("should display an image with class nav__logo", () => {
            cy.get('.nav__container')
                .find("img")
                .should('be.visible')
                .should('have.class', 'nav__logo');
        });
        it("should display 3 elements 'Buscar', 'Crear', 'Iniciar sesión'", () => {
            cy.get('.nav__menu')
                .children()
                .should('have.length', 3)
                .should('contain', 'Buscar')
                .should('contain', 'Crear')
                .should('contain', 'Iniciar sesión');
        });
        it("'Crear' should navigate to Auth page", () => {
            cy.get('.nav__menu')
                .children()
                .eq(2)
                .click();
            cy.url().should('include', '/auth/login');
            cy.visit('/');
        });
        it("'Iniciar sesión' should navigate to Auth page", () => {
            cy.get('.nav__menu')
                .children()
                .last()
                .click();
            cy.url().should('include', '/auth/login');
            cy.visit('/');
        });
    })
    describe('Test secondary menu', () => {
        it("should display two tabs", () => {
            cy.get('.sub-menu__nav')
                .children()
                .should('have.length', 2)
                .should('contain', ' Creados por abogados ')
                .should('contain', ' Creados por usuarios ');
        });
        it("should navigate to '/search/user-forms'", () => {
            cy.get('.sub-menu__nav')
                .children()
                .last()
                .click();
            cy.url().should('include', '/search/user-forms');
            cy.get('.sub-menu__nav')
                .children()
                .first()
                .click();
        });
    });
    describe('Test header container', () => {
        it("should containt a nav link to '/search/search-transaction'", () => {
            cy.get('.lawyer-forms__top-right-link')
                .children()
                .first()
                .find("a")
                .should('be.visible')
                .should('contain', ' Buscar transacción ')
                .click();
            cy.url().should('include', '/search/search-transaction');
            cy.go('back');
        });
        it("should containt a nav link to '/auth/login'", () => {
            cy.get('.lawyer-forms__top-right-link')
                .children()
                .last()
                .find("a")
                .should('be.visible')
                .should('contain', ' Crear mi propio formulario ')
                .click();
            cy.url().should('include', '/auth/login');
            cy.go('back');
        });
    });
})