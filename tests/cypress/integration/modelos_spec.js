describe('Modelos page', () => {
    it('Visit modelo page', () => {
        cy.visit('/static/modelos/contrato-compraventa-vehiculo')
    })
    describe('Meta tags and links', () => {
        it("should have canonical url", () => {
            cy.get('link[rel="canonical"]').should("have.attr", "href", Cypress.config().baseUrl + "/static/modelos/contrato-compraventa-vehiculo");
        });
    })
})