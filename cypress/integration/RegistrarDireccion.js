describe('Agregar dirección a un usuario que se encuentre registrado en el portal', function () {
    beforeEach(function () {
        cy.fixture('login.json').as('datosLoguin');
        cy.visit('/');
    })


    it('login', function () {
        cy.get('[title="Log in to your customer account"]').click();
        cy.server();
        cy.route('POST', 'api/login').as('loginRequesT');
        cy.get('@datosLoguin')
            .then(({ user, password }) => {
                cy.log(user);
                cy.login({ user, password });
                // cy.wait('@loginRequesT');
                cy.url().should('include', 'my-account');
                cy.get('#SubmitLogin > span').click();
                cy.get('[title="View my customer account"]')
                    .type('Elvis Miguel Mieles Guarin');

            });
    });

});