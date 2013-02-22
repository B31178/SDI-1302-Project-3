
//	Travis J. Pochintesta
//	SDI 1302
//	Project 3
//	Objects & Properties

//  Global Variables

var buyVehicle = true;

//  Arrays

var vehicleType = ["car", "truck", "van"];

//  Functions

var whichType = function (gonnaBuy, type) {
    if (gonnaBuy === true) {
        console.log("I'm ready to buy a " + type + ".");
    } else {
        console.log("I think I'm gonna wait to decide.");
    }
}

var amountMoney = function (thousand) {

    while (thousand < 15) {
        console.log("Counting my money...");
        thousand++;
    }
    console.log("I have $ " + thousand + ".");
    return thousand;

}

var whichColor = function (color) {
    for (var color = 0; color < jsonCars.cars[2].color.length; color++) {
        console.log("Choosing color...");
    }
    if (jsonCars.cars[2].color.length < 3) {
        console.log(jsonCars.cars[2].color.length + " colors are currently available.");
    } else {
        console.log("All colors are available.");
    }
    console.log(jsonCars.cars[2].color[2] + " is the color I want.");
    return color;

}

//  Objects

var jsonCars = {

    "cars": [

    {

        "price": 15000,
        /*Property Number*/
        "color": "black",
        /*Property String*/
        "monoChrome": true,
        /*Property Boolean*/

    },

    { /*Contains Mutator*/

        "price": 10000,
        /*Property Number*/
        "color": "red",
        /*Property Number*/
        "monoChrome": false,
        /*Property Boolean*/

    },

    {

        "price": 12000,
        /*Property Number*/
        "color": ["white", "gray", "black"],
        /*Property Array of Strings*/
        "monoChrome": true,
        /*Property Boolean*/

    }]
}


var customize = {

    "options": {


        "distance": function (gallons, mpg) { /*Method Function*/
            var outcome = (gallons * mpg); /*Math*/
            return outcome;

        },

        "altColor": function (newColor, color) { /*Method Mutator*/
            color = newColor;
            console.log("Yes we have it in " + jsonCars.cars[1].color + ".");

        },


        "checkColor": function () { /*Do I need this?*/
            if (this.color === "white"); /*Procedure*/
            {
                this.monochrome = true;
                console.log("Yes!")
            }
            //} else { 
            //	this.monochrome = false;
            //	console.log("No.");
        }

    }
}

//  Main Code

whichType(buyVehicle, vehicleType[0]);

console.log("I'm looking for an affordable monochromatic car that can go the furthest on 5 gallons of gas.");
console.log("There are 3 models in particular that I've been considering.");

console.log("The first car costs " + jsonCars.cars[0].price + " and is " + jsonCars.cars[0].color + ".");
console.log("It can travel " + customize.options.distance(5, 25) + " on 5 gallons of gas.");

console.log("The second car costs " + jsonCars.cars[1].price + " and is " + jsonCars.cars[1].color + ".");
console.log("It can travel " + customize.options.distance(5, 28) + " on 5 gallons of gas.");

console.log("The third car costs " + jsonCars.cars[2].price + " and is " + jsonCars.cars[2].color + ".");
console.log("It can travel " + customize.options.distance(5, 30) + " on 5 gallons of gas.");

console.log("I'm leaning towards purchasing the second car since it costs the least and has decent gas mileage.");
console.log("The problem is it only comes in " + jsonCars.cars[2].color + ".")
console.log("Is this car available in white?");

customize.options.altColor("white", jsonCars.cars[1].color);

console.log("Let me see how many thousands I have.");

amountMoney(13);

whichColor(3);