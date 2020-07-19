describe('Agregar dirección a un usuario que se encuentre registrado en el portal',function(){
   
   
   
    it('Ingresar al usuario y contraseña', function(){
       cy.visit('http://automationpractice.com/index.php');
       cy.get('[title="Log in to your customer account"]').click();
       cy.get('#email').type('elmielesguarin@poligran.edu.co');
       cy.get('#passwd').type('Poli*2019');
       cy.get('#SubmitLogin > span').click();

       it('Se valida el nombre del usuario', function(){
        
        cy.get('[class="account"]').contains('Elvis Miguel Mieles Guarin');
       })
      
   })
})