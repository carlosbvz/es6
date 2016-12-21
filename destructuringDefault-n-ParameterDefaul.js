'use strict'

function f6( { x = 10 } = {}, {y} = { y:10}) {
	console.log(x,y)
}
{
	
}
f6();
f6({},{})
f6({})