describe('formas de encontrar un elemento', function(){
     it('Buscar en el buscador', function(){
         cy.visit('http://automationpractice.com/index.php');
         cy.get('.search_query.form-control.ac_input').type('Hola'); /// busqueda por clase
         cy.get('#search_query_top').type('¿como estas?'); //busqueda por ID
         cy.get('[name="search_query"]').type('Muy Bien y tu ?') //propiedades
        cy.get('[placeholder="Search"]').clear();


    })
})