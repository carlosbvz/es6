'use strict'

function runSomething(o) {
	let x = Math.random(),
		y = Math.random();

	return o.something(x,y)
}
/*--------------------------------------
|	In this example, the line 'return 
| 	something(y,x)' can be called because 
|	we use the indentifier 'something'. 
| 	That is why in this case the redundant 
|	'something' is useful
\---------------------------------------*/
runSomething({
	something: function something(x,y) {
		if(x > y) {
			return something(y,x);
		}
		return y - x
	}
})

/*---------------------------------------
| 	This will break since concise methods 
|	implies anonymous functions
\---------------------------------------*/
runSomething({
	something(x, y) {
		if(x > y) {
			return something(y, x)
		}
		return y - x
	}
})


