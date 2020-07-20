describe('Agregar dirección a un usuario que se encuentre registrado en el portal',function(){
    beforeEach(function(){
        cy.visit('/');
       })
   
   
    it('login', function(){
        cy.get('[title="Log in to your customer account"]').click();
      
        cy.fixture('login.json')
       .then(({user,password}) =>{
       cy.log(user);
       cy.get('#email').type(user);
       cy.get('#passwd').type(password,{log: false});
       cy.get('#SubmitLogin > span').click();
    });
       cy.get('[title="View my customer account"]')
       .type('Elvis Miguel Mieles Guarin');

       
      
   })
})