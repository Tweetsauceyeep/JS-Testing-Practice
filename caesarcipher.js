let letterArray = 'abcdefghijklmnopqrstuvwxyz';

// takes the letterArray and shifts the letters
// to the same amount as the key.
// if key is 2 *a* becomes *c*

function createEncryptedAlphabet(key) {
  let letters = letterArray.split('');
  let newLetterArray = [];
  for (let i = 0; i < letterArray.length; i++) {
    // i literally dont know how this works
    let shift = (i + key) % letters.length;
    newLetterArray.push(letters[shift]);
  }

  console.log(newLetterArray.length);
  return newLetterArray;
}

function caesarCipher(startString, key) {
  let newLetterArray = createEncryptedAlphabet(key);
  let string = startString.split('');
  let newString = [];
  for (let i = 0; i < string.length; i++) {
    if (){
    }
  }
  return newString.join('');
}

console.log(caesarCipher("hello", 1))

module.exports = caesarCipher;
