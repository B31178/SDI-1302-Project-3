//	Travis J. Pochintesta
//	SDI 1302
//	Project 3
//	Objects & Properties

//  Global Variables

//  Arrays

//  Functions

//  Objects

var carOne = {
	"gallons": 15, /*Property Number*/
	"miles": 250, /*Property Number*/
	"color": "black", /*Property String*/
	"monoChrome": true /*Property Boolean*/
	"average": function () { /*Method Function*/
				var outcome = (this.gallons * this.miles) / 2; /*Method Accessor & Math*/
				return outcome;
				}
	
	}

var carTwo = { /*Contains Mutator*/

	"gallons": 10, /*Property Number*/
	"miles": 300, /*Property Number*/
	"color": "red", /*Property Number*/
	"monoChrome": false /*Property Boolean*/
	"average": function () { /*Method Function*/
				var outcome = (this.gallons * this.miles) / 2; /*Method Accessor & Math*/
				return outcome;
				},
				
	"altColor": function (newColor) { /*Method Mutator*/
				this.color = newColor;
				}
	if this.color === "white" { /*Procedure*/
		this.monochrome === true
		} else { this.monochrome === false
		}
	}

var carThree = {

	"gallons": 12, /*Property Number*/
	"miles": 350, /*Property Number*/
	"color": ["white", "gray", "black"] /*Property Array of Strings*/
	"monoChrome": true /*Property Boolean*/
	"average": function () { /*Method Function*/
				var outcome = (this.gallons * this.miles) / 2; /*Method Accessor & Math*/
				return outcome;
				}
	
	}
	
//  Main Code

console.log("The first car's gas mileage is " + carOne.average());

carTwo.newColor("white");
