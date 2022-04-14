/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen(){
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber<=10){
  while (currentNumber <= 10){
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log(getNumbersToTen())

console.log('numbers to ten: ', getNumbersToTen());

function getEvenNumbersToTwenty(){
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20){
    evenNumbers.push(currentNumber)
    currentNumber +=2;
  }
  return evenNumbers;
}
console.log('even numbers to twenty: ', getEvenNumbersToTwenty());

function repeatWord(word, times){
  var count = 1;
  var repeated = '';
  while (count < times){
    repeated += word;
    count ++
  }
  return repeated;
}
console.log('repeated word: ', repeatWord('tomato', 100))

function logEachCharacter(string){
  for (var i = 0; i <string.length; i++){
    console.log(string[i]);
  }
}
console.log(logEachCharacter('javascript'))

function doubleAll(numbers){
  var doubled = [];
  for (var i = 0; i < numbers.length; i++){
    doubled.push(numbers[i]*2);
  }
  return doubled;
}
console.log('doubleAll[1000,22,123,451] ', doubleAll([1000,22,123,451,]))

function getKeys(object){
  var keys = [];
  for (var key in object){
    keys.push(key);
  }
  return keys;
}
console.log('{name: changhyun age: 27}, ', getKeys({name: 'changhyun', age: 27}))

function getValues(object){
  var values = [];
  for (var key in object){
    values.push(object[key]);
  }
  return values;
}

console.log('[name: changhyun, age: 27] ', getValues({name: 'changhyun', age: 27}))
