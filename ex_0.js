'use strict';
//Write a function that returns the passed in string with an s added
//eg 'bat' -> 'bats'
//eg 'bats' ->  'batss'

function firstFunction(string) {
  return string
    .concat('s');
}


exports.firstFunction = firstFunction;
