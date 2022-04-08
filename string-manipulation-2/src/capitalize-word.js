/* exported capitalizeWord */
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
