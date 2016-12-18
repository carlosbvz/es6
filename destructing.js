'use strict'

// Using array
function foo() {
	return [1,2,3]
}
let tmp = foo(),
	a 	= tmp[0], 
	b 	= tmp[1],
	c 	= tmp[2];
console.log(a,b,c)

// Using objects
function bar() {
	return {
		x: 4,
		y: 5,
		zetha: 6
	}
}
let tmp2 = bar(),
	x 	 = tmp2.x,
	y 	 = tmp2.y,
	z 	 = tmp2.zetha;
console.log(x, y, z)


// Destructuring with es6 , the last parameter (dd) remains 'undefined'
let [aa, bb, cc, dd] = foo()
console.log(aa, bb, cc, dd)
//	In this case, 'xx' is the new variable being 
// 	created that gets the value of 'x'
// 	property-alias:value
let {x:xx,yy,zetha} = bar();
console.log(xx,y,zetha)