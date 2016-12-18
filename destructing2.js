'use strict'

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

let a,b,c,x,y,z;

[a,b,c] = foo();
({x,y,z} = bar())

console.log(a,b,c)
console.log(x,y,z)

var o = {};
[o.a, o.b, o.c] = foo()
console.log(o)