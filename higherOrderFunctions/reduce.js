'use strict'

const objects = [
	{name: 'carlos', type: 'human'},
	{name: 'T-rex', type: 'dino'},
	{name: 'chair', type: 'thing'},
	{name: 'box', type: 'thing'},
	{name: 'dante', type: 'dog'}
]

/*
|	This will return 
*/
let uniqueArray = objects.filter(function(item, pos, self) {
    return self.indexOf(item) == pos
})

console.log(uniqueArray)