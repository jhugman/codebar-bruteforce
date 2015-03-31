'use strict';

var fs = require('fs'),
    _ = require('underscore');

var tsvFile = fs.readFileSync(__dirname + '/../resources/ngrams-all.tsv').toString();

var obj = {};

_.each(tsvFile.split('\n'), function (line) {
  var words = line.split('\t');
  var ngram = words[0];

  if (ngram.length === 1) {
    obj[ngram.toLowerCase()] = +words[1];
  } 
});

console.log('module.exports =');
console.dir(obj);
console.log(';');