'use strict';

var _ = require('underscore');

var letterFrequencyCalculator = require('./make-new-ngrams'); 

var decryptPartial = require('./decrypt-partial'),
    isNonsense = require('./is-nonsense'),
    alphabet = [' ', 'e', 't', 'a', 'o', 'i', 'n', 's', 'r', 'h', 'l', 'd', 'c', 'u', 'm', 'f', 'p', 'g', 'w', 'y', 'b', 'v', 'k', 'x', 'j', 'q', 'z'];


function tryPartialKey (message, partialKey, index, cipherLetters) {
  index = index || 0;
  partialKey = partialKey || {};
  // have we finished?

  if (!cipherLetters) {
    cipherLetters = letterFrequencyCalculator(message);
    console.log('Cipher letters is ' + cipherLetters);
  }

  var candidatePlainText = decryptPartial(message, partialKey);
  if (isNonsense(candidatePlainText, partialKey)) {
    return;
  }
  console.log(candidatePlainText);

  if (_.size(partialKey) === alphabet.length) {
    return candidatePlainText;
  }

  //
  var plainLetter = alphabet[index];

  for (var i=0, max = alphabet.length; i < max; i++) {
    var cipherLetter = cipherLetters[i];
    if (!partialKey[cipherLetter]) {
      var newKey = _.clone(partialKey);
      newKey[cipherLetter] = plainLetter;

      var plainText = tryPartialKey(message, newKey, index + 1, cipherLetters);
      if (plainText) {
        return plainText;
      }
    }
  }
}

var cipherText = 'vrfiw vis vilgivrfik v';
console.log(cipherText + ' is ' + tryPartialKey(cipherText));



// 
// partialKey, 
// for each letters, l not in the partialKey
//    make a copy of partialKey, with 

// { a: t }
// { a: t, b: e}, { a: t, c: e}, { a: t, d: e},