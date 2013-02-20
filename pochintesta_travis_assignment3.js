//	Travis J. Pochintesta
//	SDI 1302
//	Project 3
//	Objects & Properties

//  Global Variables

//  Arrays
/*Array of Objects*/ [carOne, carTwo, carThree]

//  Functions

/*Average*/


//  Objects

var carOne = {
	"gallons": 15,
	"miles": 250,
	"color": "black",
	"average": function () {
				var outcome = (this.gallons * this.miles) / 2;
				return outcome;
				}
	
	}

var carTwo = { /*Contains Mutator*/

	"gallons": 10,
	"miles": 300,
	"color": "red",
	"average": function () {
				var outcome = (this.gallons * this.miles) / 2;
				return outcome;
				},
				
	"altColor": function (newColor) {
				this.color = newColor;
				}
	
	}

var carThree = {

	"gallons": .75,
	"miles"; 2,
	"color": 1.5,
	"average": function () {
				var outcome = (this.gallons * this.miles) / 2;
				return outcome;
				}
	
	}





