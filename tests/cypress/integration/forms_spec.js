[
    'contrato-arrendamiento-habitacion',
    'contrato-arrendamiento-vivienda',
    'contrato-arrendamiento-plaza-garaje'
].forEach((id) => {
    describe('Page', () => {
        it('should visit modelo page', () => {
            cy.visit(`/certified-forms/${id}`);
        })
        it('it should have the canonical setted to the id', () => {
            cy.get('link[rel="canonical"]')
                .should("have.attr", "href", Cypress.config().baseUrl + `/certified-forms/${id}`);
        })
    });
});