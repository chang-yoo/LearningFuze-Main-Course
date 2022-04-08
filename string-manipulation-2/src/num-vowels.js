/* exported numVowels */
/*
function definition
assign lowercased parameter to variable
assign 0 to variable
use for loop and if to fnd if vowels in an argumenit
if true increment varible with the value of 0
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
