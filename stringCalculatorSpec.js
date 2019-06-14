describe("stringCalculator", function(){
    

    it("should return zero when the string is empty", function(){
      let answer = calculator(" ")

      expect(answer).toBe(0);
    });
    it("should return sum of two numbers separated by commas", function(){
      let answer = calculator("1,2")
      expect(answer).toBe(3);
    });
    it("should return zero when the string is empty", function(){
      let answer = calculator(" ")
      expect(answer).toBe(0);
    });
    it("should handle unknown amount of numbers", function(){
      let answer = calculator("1,2,3,4")
      expect(answer).toBe(10);
    });
    it("should handle new lines between numbers", function(){
      let answer = calculator("1\n3")
      expect(answer).toBe(4);
    });
    it("should return a number where the default delimiter is ','", function(){
      let answer = calculator("//;\n2;4")
      expect(answer).toBe(6);
    });
    it("should return 'negatives not allowed' when numbers are less than zero", function(){
      let answer = function(){throw 'negatives not allowed'} 
      expect(answer).toThrow('negatives not allowed');
    });
    })