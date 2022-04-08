/* exported capitalizeWords */
function capitalizeWords(string){
  var output = [];
  var arr = string.split(' ')
  for (var i = 0; i < arr.length; i++){
  var word = arr[i];
  var upperCase = word[0].toUpperCase();
  var restLetter = word.slice(1);
  var lowerCase = restLetter.toLowerCase();
  var oneWord = upperCase + lowerCase;
  output.push(oneWord);
  }
  var convertToString = output.join(' ');
  return convertToString
}
