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