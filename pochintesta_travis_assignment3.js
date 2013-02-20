//	Travis J. Pochintesta
//	SDI 1302
//	Project 3
//	Objects & Properties

//  Global Variables

//  Arrays

//  Functions

//  Objects

var carOne = {

	"price": 15000, /*Property Number*/
	"color": "black", /*Property String*/
	"monoChrome": true, /*Property Boolean*/
	"distance": function(gallons, mpg) { /*Method Function*/
				var outcome = (gallons * mpg); /*Math*/
				return outcome;
				}
			};


var carTwo = { /*Contains Mutator*/

	"price": 10000, /*Property Number*/
	"color": "red", /*Property Number*/
	"monoChrome": false, /*Property Boolean*/
	"distance": function(gallons, mpg) { /*Method Function*/
				var outcome = (gallons * mpg); /*Math*/
				return outcome;
				},
				
	"altColor": function(newColor) { /*Method Mutator*/
				this.color = newColor;
				},
				
	if (this.color === "white") { /*Procedure*/
			this.monochrome = true;
			console.log("Yes!");
		} else { 
			this.monochrome = false;
			console.log("No.");
		},
		
}

var carThree = {

	"price": 12000, /*Property Number*/
	"color": ["white", "gray", "black"], /*Property Array of Strings*/
	"monoChrome": true, /*Property Boolean*/
	"distance": function(gallons, mpg) { /*Method Function*/
				var outcome = (gallons * mpg); /*Math*/
				return outcome;
				}
	}
	
//  Main Code

console.log("I'm looking for an affordable monochromatic car that can go the furthest on 5 gallons of gas.");
console.log("There are 3 models in particular that I've been considering.");

console.log("The first car costs " + carOne.price + " and is " + carOne.color + ".");
console.log("It can travel " + carOne.distance(5, 25) + " on 5 gallons of gas.");

console.log("The second car costs " + carTwo.price + " and is " + carOne.color + ".");
console.log("It can travel " + carOne.distance(5, 28) + " on 5 gallons of gas.");

console.log("The third car costs " + carThree.price + " and is " + carOne.color + ".");
console.log("It can travel " + carOne.distance(5, 30) + " on 5 gallons of gas.");

console.log("I'm leaning towards purchasing the second car since it costs the least and has decent gas mileage.");
console.log("The problem is it only comes in " + carTwo.color + ".")
console.log("Is this car available in white?");
carTwo.altColor("white");
