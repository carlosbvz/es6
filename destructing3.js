'use strict'

function foo() {
	return [1,2,3]
}
function bar() {
	return {
		x: 4,
		y: 5,
		z: 6
	}
}

let [,b] = foo()
let {x, z} = bar()

console.log(b,x,z)