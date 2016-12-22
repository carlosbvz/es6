'use strict'

// Regular way
let x = 2, y = 3,
	o = {
		x: x, 
		y: y
	}

// The new es6 way
let oES6 = {
	// concise property
	x, // x = 2
	// concise methods
	y() {
		console.log(this.x) // 2
	},
	z() {
		console.log(this)
	}
}

oES6.y()
oES6.z()



