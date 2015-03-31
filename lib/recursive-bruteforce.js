'use strict';

var _ = require('underscore');

var decryptPartial = require('./decrypt-partial'),
    isNonsense = require('./is-nonsense'),
    alphabet = [' ', 'e', 't', 'a', 'o', 'i', 'n', 's', 'r', 'h', 'l', 'd', 'c', 'u', 'm', 'f', 'p', 'g', 'w', 'y', 'b', 'v', 'k', 'x', 'j', 'q', 'z'];


function tryPartialKey (message, partialKey, index) {
  index = index || 0;
  partialKey = partialKey || {};
  // have we finished?

  var candiatePlainText = decryptPartial(message, partialKey);
  if (isNonsense(candiatePlainText, partialKey)) {
    return;
  }
  console.log(candiatePlainText);

  if (_.size(partialKey) === alphabet.length) {
    return candiatePlainText;
  }

  //
  var plainLetter = alphabet[index];

  for (var i=0, max = alphabet.length; i < max; i++) {
    var cipherLetter = alphabet[i];
    if (!partialKey[cipherLetter]) {
      var newKey = _.clone(partialKey);
      newKey[cipherLetter] = plainLetter;

      var plainText = tryPartialKey(message, newKey, index + 1);
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