'use strict';

let dog = {
	sound: 'woof',
	talk: function() {
		console.log('woof');
	}
}
dog.talk();
let dogTalk = dog.talk();
dogTalk();