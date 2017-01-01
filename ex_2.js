'use strict';
//Arrays!

//Write a function that adds all the numbers in a given array and
//returns the total
//eg: [1, 2, 3] -> 6
//[3, 4, 1] -> 8
function addNumbers(array) {
  //your code here!
  var sum = 0;
  for (var i in array) {
    sum += array[i];
  }
  return sum;
};

//Write a function that tells you whether an array contains a given
//string
//eg: ['sloth', 'slug', 'salmon'], 'sloth' -> true
//    ['slugs are better whatever'], 'sloth' -> true

function hasItem(array, match) {
  //your code here
  for (var i = 0; i < array.length; i++) {
    if (match !== array[i]) {
      return true;
  } else {return false;};
  }
};

//Write a function that tells you the highest value in a given array
//eg [2, 5, 9] -> 9
// [6, 4, 6] -> 6
function highestNumber(array) {
  //your code here
  var sortArray = array.sort(function(a, b){
    return b - a;
  });
  return sortArray[0];
};

//Write a function that adds an s to the end of each string in an array

//eg: ['sloth', 'slug', 'bat'] -> ['sloths', 'slugs', 'bats']
//eg: ['snakes', 'baby'] -> ['snakess', 'babys']
function pluralize(array) {
  //your code here
  var pluralArray = array.map(function(a) {
    return a + 's';
  });
  return pluralArray;
};

exports.addNumbers = addNumbers;
exports.hasItem = hasItem;
exports.highestNumber = highestNumber;
exports.pluralize = pluralize;
