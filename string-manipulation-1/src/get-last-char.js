/* exported getLastChar */
function getLastChar(string){
  var output = "";
  for (var i = 0; i<string.length; i++){
    var lastIndex = string.length - 1;
    return string[lastIndex];
}
}

var LearningFuze = 'LearningFuze';
var getLstCharResult = getLastChar(LearningFuze)
console.log('last char: ', getLstCharResult);

/*
set up a for loop within the function
give initialization, condition, and final expression for loop.
define a variable with a value -1 to the length of string
return the defined value
*/
