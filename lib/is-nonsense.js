'use strict';

var _ = require('underscore');

var trigrams = require('./trigrams-data'),
    bigrams = require('./bigrams-data'),
    onegrams = require('./1grams-data');

function calculateNgramScore(string, n, regex, ngramData) {
  // abcdef
  // 
  var testString = string,
      totalScore = 0;
  for (var i=0, max = string.length - n + 1; i < max; i++) {

    if (testString.match(regex)) {
      var ngram = testString.substring(0, n);
      var ngramScore = ngramData[ngram];

      
      if (ngramScore) {
        totalScore += ngramScore;
      } else {
        return -1;
      }

    }

    // make the test string shorter.
    testString = testString.substring(1);
  }

  return totalScore;
}

function isNonsense(string) {
  if (calculateNgramScore(string, 2, /^\w{2}/, bigrams) === -1) {
    return true;
  }

  if (calculateNgramScore(string, 3, /^\w{3}/, trigrams) === -1) {
    return true;
  }

  return false;
}

module.exports = isNonsense;