describe('cuentas',function(){
    it("vamos a ver una igualdad",function(){
        expect(1==1).to.equal(true);
    })
    it("vamos a ver no sea una igualdad",function(){
       expect(1==2).to.equal(false);
   })
   it('vamos a ver que una resta este bien',function(){
       expect(1-1).to.equal(0);
   })
   it('vamos a ver que una resta NO este bien',function(){
       expect(1-1).to.not.equal(2);
   }) 
   it('tiene que ser verdadero',function(){
       expect(2==2).to.be.true;
   }) 
   it('tiene que ser falso',function(){
       expect(2==1).to.be.false;
   }) 
   it('la variable existe',function(){
    expect(a).to.be.false;
   })
   it('menor a 10',function(){
       expect(a).to.be.lessThan(10);
   })
   it('mayor a 10',function(){
    expect(25).to.be.greaterThan(10);
})
})