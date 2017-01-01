'use strict';
//Strings!

//Write a function that capitalizes the first string, lower cases the second string and then makes one string out of them
//eg: 'bat', 'slOth' -> 'BATsloth'
//eg: 'my', 'Bud' -> 'MYbud'

function capHalf(firstString, secondString) {
  //your code here!
  var capitalize = firstString.toUpperCase();
  var lowerCase = secondString.toLowerCase();

  return capitalize + lowerCase;
}

//Write a function that takes a name and returns only the first initial capitalized with a period after it
//eg: 'mega man' -> 'M.'
//eg: 'sailor moon' -> 'S.'

function mainInitial(name) {
  //your code here!
  var firstInitial = name.substr(0,1);
  var capitalizeInitial = firstInitial.toUpperCase() + '.';

  return capitalizeInitial;
}

//Write a function that reverses a string
//eg: 'sloth' -> 'htols'
//eg: 'bat' -> 'tab'

function reverseString(string) {
  //your code here!
  var splitString = string.split('');
  var reverseSplitString = splitString.reverse();
  var joinReversedString = reverseSplitString.join('');

  return joinReversedString;
}

//Write a function that capitalizes the first letter of every word
//eg: 'no way that rules' -> 'No Way That Rules'
//eg: 'whatever sloths are the best' ->  'Whatever Sloths Are The Best'

function capitalizeEach(string) {
  //your code here!
  var phrase = string.split(' ');
  var newSentence = [];
  phrase.forEach(function(word) {
    word = word.replace(word[0], word[0].toUpperCase());
    newSentence.push(word);
  })
  return newSentence.join(' ');
}

exports.capHalf = capHalf;
exports.mainInitial = mainInitial;
exports.reverseString = reverseString;
exports.capitalizeEach = capitalizeEach;
