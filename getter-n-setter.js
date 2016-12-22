'use strict'

let o = {
	__id: 10,
	get id() 	{return this.__id++},
	set id(v)	{this.__id = v}
}

console.log(o.id) 	// getting
console.log(o.id) 	// getting
o.id = 20			// setting
console.log(o.id)   // getting

console.log(o.__id)  // direct getting
console.log(o.__id)  // direct getting

o.__id = 1 			// direct setting
console.log(o.id)   // getting