describe('stringCalculator', function() {
	it('should return zero when the string is empty', function() {
		let answer = calculator(' ');

		expect(answer).toBe(0);
	});
	it('should return sum of two numbers separated by commas', function() {
		let answer = calculator('1,2');
		expect(answer).toBe(3);
	});
	it('should handle more than tw0 numbers', function() {
		let answer = calculator('1,2,3,4');
		expect(answer).toBe(10);
	});
	it('should handle new lines between numbers', function() {
		let answer = calculator('1\n3');
		expect(answer).toBe(4);
	});
	it('should remove the default delimiter and add numbers', function() {
		let answer = calculator('//;\n2;4');
		expect(answer).toBe(6);
	});
	it("should return 'negatives not allowed' when numbers are less than zero", function() {
		let answer = function() {
			throw 'negatives not allowed';
		};
		expect(answer).toThrow('negatives not allowed');
	});
	it('should ignore numbers bigger than 1000', function(){
		let answer = calculator('2,1001');
		expect(answer).toBe(2);
	});
	it('should allow multiple delimiters', function(){
		let answer=calculator('//[*][%]\n1*2%3');
		expect(answer).toBe(6);
	});
});
