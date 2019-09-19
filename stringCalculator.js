function calculator(num) {
	var del = num.replace(/^(\/.*\n)/, ' ');
	var number = del.split(/[//|;|\n,]/);

	let answer = 0;
	if (num === ' ') {
		return 0;
	}
	for (let i = 0; i < number.length; i++) {
		answer += parseInt(number[i]);
	}
	if (answer < 0) {
		throw new Error('negatives not allowed');
	}

	return answer;
}

