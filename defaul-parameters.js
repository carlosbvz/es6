'use strict'

// 	Old school wat to default arguments
function foo(x,y) {
	x = x || 31
	y = y || 11

	console.log(x+y)
}

foo(1) 		// 12
foo(2,3) 	// 5
foo() 		// 42
foo(0,5) 	// 36!  not 5 .... because   'x = x || 31' evaluates to false


//	es6 way to default arguments
function bar(x = 31 , y = 11) {
	console.log(x+y)
}
bar(1) 		// 12
bar(2,3) 	// 5
bar() 		// 42
bar(0,5) 	// 5 :)