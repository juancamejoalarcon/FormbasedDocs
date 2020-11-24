import forms from '../forms'

const isProduction = process.env.NODE_ENV === 'production',
    isDevelopment = Cypress.env('ENV') === 'development',
    isLocal = (Cypress.env('ENV') === 'local' || Cypress.env('ENV') === 'local:windows') ? true : false;



const { id, outputExpected, outputExpectedAfterPayment, steps } = forms[0];

describe('Blogs page', () => {

    describe('Meta tags and links', () => {
        it('Visit blog page', () => {
            cy.visit(`/static/modelos/${id}`)
        })

        it("should have canonical url", () => {
            cy.get('link[rel="canonical"]').should("have.attr", "href", Cypress.config().baseUrl + `/static/modelos/${id}`);
        });
    })
})
describe('Page', () => {
    it('should visit modelo page', () => {
        cy.visit(`/certified-forms/${id}`);
    })
    it('it should have the canonical setted to the id', () => {
        cy.get('link[rel="canonical"]')
            .should("have.attr", "href", Cypress.config().baseUrl + `/certified-forms/${id}`);
    })
});
describe('Fill form', () => {
    // import { steps, outputExpected } from `./forms/${id}`;
    it('Get to final step', () => {
        cy.get('.button-filled--start-form').click()
        cy.wait(400)
        cy.get('#modal-button').click()
        steps.forEach((step) => {
            switch (step.type) {
                case 'number':
                case 'text':
                    if (step.value !== '') cy.get('input[type=text]').type(step.value)
                    break;
                case 'textarea':
                    if (step.value !== '') cy.get('textarea').type(step.value)
                    break;
                case 'date':
                    if (step.value !== '') cy.get('input[type=date]').type(step.value)
                    break;
                case 'range':
                    cy.get('input[type=range]')
                        .invoke('val', parseInt(step.value))
                        .trigger('change')
                    break;
                case 'radioB':
                case 'radioC':
                    cy.get('.form-creator__fields-area__field__middle > div')
                        .children()
                        .eq(parseInt(step.value) - 1)
                        .find('span')
                        .click();

                    break;
                case 'select':
                    cy.get('select > option')
                        .eq(parseInt(step.value) - 1)
                        .then(e => cy.get('select').select(e.val()))
                    break;

                default:
                    break;
            }
            cy.get('.icon-chevron-right-solid').click()
        })
    })
    it('Text should be expected', () => {
        cy.get('document').children().eq(6).should($el => {
            expect($el[0].textContent).to.equal(outputExpected)
        })
    })

});
describe('Checkout', () => {
    let doc_value;
    let doc_value_plus_lawyer;
    it('should show checkout modal', () => {
        cy.get('.button-filled--start-form').click()
        cy.get('app-checkout').parent().should('have.class', 'show-modal')
    })
    it('should show total amount equal to doc value', () => {
        cy.get('.checkout-panel__body__invoice__text__doc__price').should($el => {
            doc_value = parseInt($el[0].textContent.trim().slice(0, -1).trim())
        })
        cy.get('.checkout-panel__body__invoice__text__total__left').should($el => {
            expect(doc_value).to.equal(parseInt($el[0].textContent.trim().slice(0, -6).trim()))
        })
    })
    it('should add lawyer price to total amount', () => {
        cy.get('label[for=hire]').click()
        cy.get('.checkout-panel__body__invoice__text__total__left').should($el => {
            doc_value_plus_lawyer = doc_value + 29
            expect(parseInt($el[0].textContent.trim().slice(0, -6).trim())).to.equal(doc_value_plus_lawyer)
        })
    })
    it('should go to email input and fill', () => {
        cy.get('.checkout-panel__footer .next-btn').click()
        cy.get('.checkout-panel__body__email').should('be.visible')
        cy.get('input[type=email]').type('automatikdocs@automatikdocs.com')
        cy.get('label[for=conditions]').click()
    })

    it('should show PAYPAL BUTTON', () => {
        cy.get('.checkout-panel__footer .next-btn').click()
        cy.wait(1000)
        cy.server()
        cy.route('POST', '/api/checkout/paypal-order').as('paypal-order')
        cy.get('#paypal').click()
        cy.wait('@paypal-order').its('status').should('eq', 200)
        cy.wait(4000)
        // cy.get('.checkout-panel__footer .next-btn').click()
        // cy.wait(4000)
    })

    // it('should show price', () => {
    //     cy.get('.checkout-panel__body__invoice__text__total__left.total-success').should($el => {
    //         expect(parseInt($el[0].textContent.trim().slice(0, -2).trim())).to.equal(doc_value_plus_lawyer)
    //     })
    // })
    // if (outputExpectedAfterPayment) {
    //     it('Text should be expected after payment', () => {
    //         cy.wait(1000)
    //         cy.get('document').children().eq(6).should($el => {
    //             expect($el[0].textContent).to.equal(outputExpectedAfterPayment)
    //         })
    //     })
    // }


});
