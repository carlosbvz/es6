'use strict'
// Using array
function foo() {
	return [1,2,3]
}
function bar() {
	return {
		x: 4,
		y: 5,
		zetha: 6
	}
}

let [ a = 3, b = 6, c = 9, d = 12 ] 	= foo()
let { x = 5, y = 10, zetha = 15, w = 20 } 	= bar()

console.log(a,b,c,d)		// 1 2 3 12
console.log(x,y,zetha,w)	// 4 5 6 20