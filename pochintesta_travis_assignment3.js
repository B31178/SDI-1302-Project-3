
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
    console.log("I have $" + thousand + " thousand.");
    return thousand;

}

var whichColor = function (color) {
    for (var color = 0; color < jsonCars.cars[2].color.length; color++) {
        console.log("Choosing color...");
    }
    if (jsonCars.cars[2].color.length > 0) {
        console.log(jsonCars.cars[2].color.length + " colors are currently available.");
    } else {
        console.log("All colors are available.");
    }
    console.log(jsonCars.cars[2].color[0] + " is the color I want.");
    return color;

}

//  Objects

var jsonCars = {

    "cars": [

    {

        "price": 15000,
        "color": "black",
        "monoChrome": true,
        
    },

    {
        "price": 10000,
        "color": "red",
        "monoChrome": false,

    },

    {

        "price": 12000,
        "color": ["white", "gray", "black"],
        "monoChrome": true,

    }]
}


var customize = {

    "options": {


        "distance": function (gallons, mpg) {
            var outcome = (gallons * mpg);

        },

        "altColor": function (newColor, color) {
            color = newColor;
            console.log("Yes we also have it in " + color + ".");

        },

    }
}

//  Main Code

whichType(buyVehicle, vehicleType[0]);

console.log("I'm looking for an affordable monochromatic car that can go the furthest on 5 gallons of gas.");
console.log("There are 3 models in particular that I've been considering.");

console.log("The first car costs $" + jsonCars.cars[0].price + " and is " + jsonCars.cars[0].color + ".");
console.log("It can travel " + customize.options.distance(5, 25) + " miles on 5 gallons of gas.");

console.log("The second car costs $" + jsonCars.cars[1].price + " and is " + jsonCars.cars[1].color + ".");
console.log("It can travel " + customize.options.distance(5, 28) + " miles on 5 gallons of gas.");

console.log("The third car costs $" + jsonCars.cars[2].price + " and is " + jsonCars.cars[2].color + ".");
console.log("It can travel " + customize.options.distance(5, 30) + " miles on 5 gallons of gas.");

console.log("I'm leaning towards purchasing the second car since it costs the least and has decent gas mileage.");
console.log("The problem is it only comes in " + jsonCars.cars[2].color + ".")
console.log("Is this car available in white?");

customize.options.altColor("white", jsonCars.cars[1].color);

console.log("Let me see how many thousands I have.");

amountMoney(13);

whichColor(3);
