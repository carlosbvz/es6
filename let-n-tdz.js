'use strict'
{
	if (typeof a === 'undefined') {
		console.log('cool')
	}
	if (typeof b === 'undefined') { // => TDZ
		console.log('cool as well')
	}

	let b;
}

/* 	let variables are NOT hoisted, so they trigger and Temporal Dead Zone error
|	if the variable declared with 'let' is intended to be used before
| 	it has been declared. 

| 	Variables declare with 'var' are hoisted.
