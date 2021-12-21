// change the background color of the box to red
var docoolstuff = function() {
	var currentclassname = document.getElementById('cool').className;

if (currentclassname == 'cool') {
	document.getElementById('cool').className = 'cool red';
	} else {
	document.getElementById('cool').className = 'cool';
	};
}


var car = {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isturnedon: false,
			numberofwheels: 4,
			seats: [
				'seat 1',
				'seat 2',
				'seat 3',
				'seat 4'
			],
			turnon: function () {
				this.isturnedon = true;
			},
			fly: function () {
				alert('fly');
			},
			switchcar: function(ison) {
				console.log('turn car'+ ison)
				;
				if (ison == true) {
					this.isturnedon = true;
				} else {
					this.isturnedon = false;
				};
			},
		};



	console.log('hello there friends!');