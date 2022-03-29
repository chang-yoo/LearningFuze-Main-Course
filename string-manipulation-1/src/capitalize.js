/* exported capitalize */

/*
create a function def.
assign empty string to a variable ('')
assign first index number to a variable (firstLetter)
assign a variable with an uppercase method (upperCase)
assign the rest words to a variable (restWords)
assign a variable with a lowercase method (lowerCase)
*/


function capitalize(word){
  var output = '';
  var firstLetter = word[0]
  var upperCase = firstLetter.toUpperCase();
  var restWords = word.slice(1);
  var lowerCase = restWords.toLowerCase();
  output = upperCase + lowerCase;
  return output;
}
