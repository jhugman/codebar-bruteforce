'use strict';

var _ = require('underscore');

var ciperText = 'vrfiw vis vilgivrfik v';

function makeObjectFromString (keyString, valueString) {
  var obj = {};

  for (var i=0; i < keyString.length; i++) {
    var key = keyString[i];
    var value = valueString[i] || valueString;

    obj[key] = value;
  }

  return obj;
}

function bruteforce (ciperText) {

  var keyPart = {};
  var alphabet = 'abcdefghijklmnopqrstuvwxyz ';

  // let's not optimize too early.
  var frequencyLetters = alphabet;

  keyPart = bruteforceNextBit(cipherText, keyPart, makeObjectFromString(alphabet, true), frequencyLetters, 0);
}

function bruteforceNextBit(cipherText, keyPart, alphabet, frequencyLetters, indexIntoFrequencyLetters) {

}