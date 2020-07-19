describe('Operaciones Matematicas', function(){
    var a = 1+1;
    var b =2;
it('suma de dos numeros',function() {
    expect (a==b).to.equal(true);
   });
   it('Resta de dos numeros', function(){
        expect (a-b).to.equal(0);
   })
})