/* exported capitalizeWord */
/*
function definition
make ONLY first letter of parameter capitalized
separate the first letter and make the rest letters lowercased
add two separate variables to create one word
since javascript always returns 'JavaScript',
make all letters uppercase or lowercase and return 'JavaScript'
*/
function capitalizeWord(word){
  var output = '';
  var firstLetter = word[0];
  var upperCase = firstLetter.toUpperCase();
  var restLetter = word.slice(1);
  var lowerCase = restLetter.toLowerCase();
  output = upperCase + lowerCase;
  if (word.toUpperCase() === 'JAVASCRIPT'){
    return 'JavaScript'
  }
  return output;
}
