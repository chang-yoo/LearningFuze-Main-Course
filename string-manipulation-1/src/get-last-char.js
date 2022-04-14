/* exported getLastChar */
function getLastChar(string){
  var output = "";
  var lastIndex = string.length - 1;
  return string[lastIndex];
}

var LearningFuze = 'LearningFuze';
var getLstCharResult = getLastChar(LearningFuze)
console.log('last char: ', getLstCharResult);

/*
define a function,
assign a variable with a value -1 to the length of string
return the defined value as index number of paratmeter
*/
