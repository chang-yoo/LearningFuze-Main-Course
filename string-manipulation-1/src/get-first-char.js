/* exported getFirstChar */

/* pseudo code
create a for loop within the function.
create an empty string for output
find the initialization, condition, and final expression for the loop.
return the fist index [0] of the string to the output.
*/

function getFirstChar(string){
  for (var i = 0; i < string.length; i++){
    return string[0];
  }
}

var LearningFuze = 'LearningFuze';
var getFirstCharResult = getFirstChar(LearningFuze);
console.log('first char: ', getFirstCharResult);
