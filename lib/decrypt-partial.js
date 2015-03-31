function decrypt (cipherText, partialKey){
  var plainText = '';
  for (var i = 0; i < cipherText.length; i++) {
    var cipherLetter = cipherText[i],
        plainLetter = partialKey[cipherLetter];

    if (plainLetter) {
      plainText += plainLetter;  
    } else {
      plainText += '-';
    }
  } 
  return plainText;
}


var partialKey = {
  ' ': 'a',
  c: 'b',
  w: 'c',
  f: 'd',
  j: 'e'
};

// var message = 'jzfwc ';
// console.log(message + ' is paritally decrypted as ' + decrypt(message, partialKey));

module.exports = decrypt;