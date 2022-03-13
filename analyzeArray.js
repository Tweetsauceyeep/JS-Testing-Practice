//An analyzeArray function that takes an array
//of numbers and returns an object with
//the following properties:
//average, min, max, and length.


let testArr = [2, 8, 3, 4, 1, 6];

function getMax(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[j], array[i] = array[i], array[j]];
      }
    }
  }
  return array[array.length - 1];
}

function getMin(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }
  return array[0];
}

const getAverage = (array)=>{
  let price = 0
  for (let i = 0; i < array.length; i++){
    price = price + array[i]
  5}
  return price/array.length
}

function analyzeArray(array) {
  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
}

console.log(analyzeArray(testArr));
module.exports = analyzeArray;
