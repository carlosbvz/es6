'use strict'

const objects = [
	{name: 'carlos', type: 'human'},
	{name: 'T-rex', type: 'dino'},
	{name: 'chair', type: 'thing'},
	{name: 'box', type: 'thing'},
	{name: 'dante', type: 'dog'}
]

let isThing = (item) => item.type === 'thing'

let types =  objects.filter(isThing)



