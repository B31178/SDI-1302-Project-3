//	Travis J. Pochintesta
//	SDI 1302
//	Project 3
//	Objects & Properties

//  Global Variables

//  Arrays
/*Array of Objects*/ [euroBird, afroBird, naBird]

//  Functions

/*Average*/
var average = function (euro, afro, nA) {
				var outcome = (euro * afro * nA) / 3;
				return outcome;
				}

//  Objects

var euroBird = {

	"velocity": 14,
	"span": 10,
	"strength": .75

	}
	
var afroBird = {

	"velocity": 10,
	"span": 12,
	"strenth": 2
	
	}
		
var naBird = {

	"velocity": 12,
	"span": [12,13,14],
	"strength": 1.5
	
	}
	
var hybridBird = {} /*incl mutator*/

var ultimateBird = {} /*JSON*/

var veloBirds = {

	"euro": 14,
	"afro": 10,
	"nA": 12,
	"average": function (euro, afro, nA) {
				var outcome = (this.euro * this.afro * this.nA) / 3;
				return outcome;
				}
	
	}

var spanBirds = {

	"euro": 10,
	"afro": 12,
	"nA": 12,
	"average": function () {
				var outcome = (this.euro * this.afro * this.nA) / 3;
				return outcome;
				},
				
	"incSpan": function (newSpan) {
				this.span = newSpan;
				}
	
	}

var strengthBirds = {

	"euro": .75,
	"afro"; 2,
	"nA": 1.5,
	"average": function (euro, afro, nA) {
				var outcome = (this.euro * this.afro * this.nA) / 3;
				return outcome;
				}
	
	}





