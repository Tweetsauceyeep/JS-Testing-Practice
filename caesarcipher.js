let letterArray = "abcdefghijklmnopqrstuvwxyz"



function caesarCipher(startString, key){
  let letters = letterArray.split("")
  let string = startString.split("")
  let newString = []

  for (let i = 0; i < string.length; i++){
    if(string[i] === letters[i]){
      newString.push(letters[i + key])
    }
  }
  console.log(newString.join(""))
  return string.join("")
}

caesarCipher("hello", 1)

module.exports = caesarCipher
