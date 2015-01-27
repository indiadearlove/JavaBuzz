describe('Javabuzz', function(){

  var javabuzz;
  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is not', function(){

    it('divisible by 3', function(){
      expect(javabuzz.says(1)).toEqual(1);
    });

  });

  describe('when playing, says', function(){

    it('"Java" when a number is divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java");
    });

  });

});