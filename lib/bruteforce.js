function bruteforce_next (ciphertext, keyPart, alphabet) {
	// special cases
	// if isKeyComplete(key), return keyPart;

	// if isNonsense(candidateText) return;

	// main work.
	// rcursively try every letter as the next of the key
	// foreach letter in alphabet that haven't used already, 
	//    find the next keypart.
	//       add letter to the keyPart
	//       var keyWorks = bruteForce(cipherText, keyPart, alphabet);
	//       if (keyWorks) return keyWorks
	//       remove letter from the keypart
}

function isNonsense (text) {
	return true;
}

function isKeyComplete (key) {
	return true;
}

function factorial (n){
	if (n === 0) return 1;
	return n * factorial (n-1);

}

console.log ('5! = ' + factorial (5));

var person = {
	name: 'bob', age: 41, weight: '15 stone', ishappy: false
};
person.ishappy = true;
console.log (person);	