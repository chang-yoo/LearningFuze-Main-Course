/* exported numVowels */
/*
function definition
set the all charcters of string uppercased or lowercased to compare to each vowels
*/

function numVowels(string){
  var stringLow = string.toLowerCase();
  var result = 0;
  for (var i = 0 ; i < string.length; i++){
    if (stringLow[i] === 'a' || stringLow[i] === 'e' || stringLow[i] === 'o' || stringLow[i] === 'i' || stringLow[i] === 'u'){
      result++
    }
  }
  return result
}
