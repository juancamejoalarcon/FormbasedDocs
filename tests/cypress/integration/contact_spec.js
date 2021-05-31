describe('Contact page', () => {
    it('Visit Contact page', () => {
        cy.visit('/static/contact', { timeout: 80000 })
    })
    describe('Test inputs', () => {
        it("should display text input 'Nombre' and behave as expected", () => {
            cy.get('input:first').as('firstInput')
                .should('have.attr', 'placeholder', 'Nombre');

            cy.get('.button-filled').click();

            cy.get('@firstInput')
                .should('have.attr', 'style', 'border-bottom: 3px solid rgb(196, 77, 88);');

            cy.get('@firstInput').type('Juan');

            cy.get('.button-filled').click();

            cy.get('@firstInput')
                .should('have.attr', 'style', 'border-bottom: 3px solid rgb(85, 98, 112);');
        });
        it("should display text input 'Email' and behave as expected", () => {
            cy.get('input:first').next().as('secondInput')
                .should('have.attr', 'placeholder', 'Correo electrónico');

            cy.get('.button-filled').click();

            cy.get('@secondInput')
                .should('have.attr', 'style', 'border-bottom: 3px solid rgb(196, 77, 88);');

            cy.get('@secondInput').type('correoincorrecto');

            cy.get('.button-filled').click();

            cy.get('@secondInput')
                .should('have.attr', 'style', 'border-bottom: 3px solid rgb(196, 77, 88);');

            cy.get('@secondInput').invoke('val', '').type('juancamejo93@gmail.com');

            cy.get('.button-filled').click();

            cy.get('@secondInput')
                .should('have.attr', 'style', 'border-bottom: 3px solid rgb(85, 98, 112);');

        });
        it("should display text input 'Nombre' and behave as expected", () => {
            cy.get('textarea')
                .should('have.attr', 'placeholder', 'Mensaje');

            cy.get('.button-filled').click();

            cy.get('textarea')
                .should('have.attr', 'style', 'border: 3px solid rgb(196, 77, 88);');

            cy.get('textarea').type('Un mensaje random lanzado desde cypress');

        });
        // it("should send Contact Form email", () => {
        //     cy.server()

        //     cy.route('POST', '/api/contact').as('postContact')

        //     // we have code that gets a comment when
        //     // the button is clicked in scripts.js
        //     cy.get('.button-filled').click();
        //     cy.get('textarea')
        //         .should('have.attr', 'style', 'border: 3px solid rgb(85, 98, 112);');
        //     cy.wait('@postContact')
        //         .should((xhr) => {
        //             expect(xhr.request.body).to.eql({
        //                 email: "juancamejo93@gmail.com",
        //                 mensaje: "Un mensaje random lanzado desde cypress",
        //                 nombre: "Juan"
        //             });
        //             expect(xhr.status).to.eq(200);
        //             expect(xhr.response.body).to.eql({ emailSent: true });
        //         })
        // });
    });
});