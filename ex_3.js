'use strict';
//Objects!

//Sloth Ranch!
//This one's a little different. We're going to use objects, constructors and the prototype to model a sloth ranch

//write a constructor that makes a new instance of Sloth when you call it. It will get passed a name as a string and a favorite tree as a string. It will also have two additional properties: feedings, which is an array of numbers that you'll initialize here as an empty array; and totalFed, which will be the running total of everything in the feedings array and start at 0.

/*eg: var violet = new Sloth('Violet', 'mangrove') -> {
  name: 'Violet',
  favoriteTree: 'mangrove',
  feedings: [],
  totalFed: 0
}*/

function Sloth(name, favoriteTree) {
  //your code here!
};

//our sloth needs a function to feed it. We want to track the size of the feedings throughout the week so we're going to keep them in an array. We'll simulate the amount fed with a random number from 0-5;

/*eg: violet.feed() -> {
  name: 'Violet',
  favoriteTree: 'mangrove',
  feedings: [4],
  totalFed
}*/

Sloth.prototype.feed = function() {
  //your code here!
};

//it also needs a function to calculate how much it's been fed. Add up all of the numbers in the feedings array and set it as the totalFed

/*eg: violet.calculateTotalFed() -> {
  name: 'Violet',
  favoriteTree: 'mangrove',
  feedings: [5, 4, 3, 1],
  totalFed: 18
}*/

Sloth.prototype.calculateTotalFed = function() {
  //your code here!
};

//Now write a constructor for the ranch. It needs a property grove which is an array where we keep all of our sloth instances.

/*eg: var ranchoSlotho = new SlothRanch() -> {
grove: []
}*/

function SlothRanch() {
  //your code here!
}

//Our ranch needs a function that creates a new sloth and adds it to the grove. You'll need to use your sloth constructor!

/* eg: ranchoSlotho.makeBabySloth('Brutus', 'cherry') -> {
  grove: [
    {name: 'Brutus', favoriteTree: 'cherry', feedings: [], totalFed: 0}
  ]
} */

SlothRanch.prototype.makeBabySloth = function(name, favoriteTree) {
  //your code here!
};

//We also need to be able to feed them. Add a function to the prototype that feeds all the sloths in the grove

/*eg: ranchoSlotho.feedSloths() -> {
  grove: [
    {name: 'Brutus', favoriteTree: 'cherry', feedings: [6], totalFed: 0}
    {name: 'Violet', favoriteTree: 'mangrove', feedings: [3], totalFed: 0}
  ]
}*/

SlothRanch.prototype.feedSloths = function() {
  //your code here!
};

//We need to be able to track down which sloths are in which tree. To do that we want to write a function that takes in a string of a type of tree and then returns an array of the names of ALL of the sloths that have that tree as their favoriteTree

//eg: ranchoSlotho.findSloths('cherry') -> ['Brutus']
//eg: ranchoSlotho.findSloths('mangrove') -> ['Violet']

SlothRanch.prototype.findSloths = function(tree) {
  //your code here!
  return this.grove.filter(s => s.favoriteTree === tree).map(s => s.name);

};

//finally we want to get the total fed per day for all of our sloths. For our purposes a day is one index in the feedings array. So we want the total of each index across all feedings arrays for all of our sloths as an array.

/* eg: if we started with: {
  grove: [
    {name: 'Violet', favoriteTree: 'mangrove', feedings: [2, 5, 1]},
    {name: 'Brutus', favoriteTree: 'cherry', feedings: [1, 7, 9]}
  ]
}

then:

ranchoSlotho.fedPerDay() -> [3, 11, 10]*/

SlothRanch.prototype.fedPerDay = function() {
  //your code here!
};

exports.Sloth = Sloth;
exports.SlothRanch = SlothRanch;