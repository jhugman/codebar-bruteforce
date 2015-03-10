console.log('hello world');
var message =  'the cat sat on the mat';
var alphabet = 'abcdefghijklmnopqrstuvwxyz ';
var key =      ' cwmfjordbankglyphsvextquzi';


function encrypt (message, key, alphabet){
	var cipher_text = '';
	for (var i = 0; i < message.length; i++) {
		var letter = message[i];

		var number_letterord = alphabet.indexOf (letter);
		cipher_text = cipher_text + key[number_letterord];
	
	} 
	return cipher_text;
}


var cipher_text = encrypt (message, key, alphabet);
console.log (message);
console.log (cipher_text);
console.log (encrypt (cipher_text, alphabet, key));