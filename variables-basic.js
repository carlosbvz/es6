'use strict'
{
	console.log(a)
	console.log(b)

	var a = 'This variable is hoisted, but is value :P'
	let b = 'This variable is not hoisted, so it breaks the whole code'  // => ReferenceError: b is not defined
}