/* exported getFirstChar */

/* pseudo code
create a for loop within the function to loop the index of an arugment.
set the initialization, condition, and final expression for the loop.
return the fist index[0]
*/

function getFirstChar(string){
  for (var i = 0; i < string.length; i++){
    return string[0];
  }
}

console.log('first char: ', getFirstChar('LearningFuze'));
