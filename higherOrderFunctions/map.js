'use strict'

const objects = [
	{name: 'carlos', type: 'human'},
	{name: 'T-rex', type: 'dino'},
	{name: 'chair', type: 'thing'},
	{name: 'box', type: 'thing'},
	{name: 'dante', type: 'dog'}
]


let getTypes = (item) => item.type
let deleteDuplicates = (item, pos, self) => self.indexOf(item) === pos

let types = objects.map(getTypes)

let uniqueTypes = types.filter(deleteDuplicates)

console.log(types)
console.log(uniqueTypes)
