'use strict'

let App = {
	model: {
		User: function() {
			console.log('User function')
		}
	}
}

// Two different ways to assign a method within a namespace
let User2 	= App.model.User // More readable way actually
let { model: {User } } = App // This is the es6 way, I really dont like it 

User()
User2()