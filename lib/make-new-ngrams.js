'use strict';

var _ = require('underscore'),
    fs = require('fs');

var string = fs.readFileSync(__dirname + '/../resources/pride-and-prejudice.txt').toString();

function calculateNgrams(string, n, regex) {
  var ngramData = {};
  // abcdef
  // 
  var testString = string;
  for (var i=0, max = string.length - n + 1; i < max; i++) {

    if (testString.match(regex)) {
      var ngram = testString.substring(0, n).toLowerCase();
      var ngramScore = ngramData[ngram];

      
      if (ngramScore === undefined) {
        ngramScore = 1;
      } else {
        ngramScore ++;
      }

      ngramData[ngram] = ngramScore;
    }

    // make the test string shorter.
    testString = testString.substring(1);
  }

  return ngramData;
}

// var monograms = calculateNgrams(string, 1, /^[a-z ]{1}/i);
// var bigrams = calculateNgrams(string, 2, /^[a-z]{2}/i);
// var trigrams = calculateNgrams(string, 3, /^[a-z]{3}/i);
// console.log('module.exports = ');
// console.log({
//   monograms: monograms,
//   bigrams: bigrams,
//   trigrams: trigrams,
// });
// console.log(';');

module.exports = function (string) {
  var monograms = calculateNgrams(string, 1, /^[a-z ]{1}/i);

  var letters = _.chain(monograms)
    .keys()
    .sortBy(function (letter) {
      return monograms[letter];
    })
    .value();

  console.log('monograms ' + monograms);
  console.log('letters ' + letters);
  return letters;
}
