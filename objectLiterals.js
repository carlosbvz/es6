'use strict'

function calculate(o) {
	let max = 10, min = 1,
	x = Math.floor(Math.random() * (max - min) + min);
	return o.factorial(x)
}

let calculator = {

	factorial: function(n) {
		if(n < 1) 	return 1
		else 		return n * calculator.factorial(n-1)
	},
}

calculator = 'calc'
console.log(calculate(calculator))
