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
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log(getNumbersToTen())
