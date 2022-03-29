/* exported getWords */

/*
creat a function with an if statement inside
define output to empty array
no need of looping because we are not looking for an index number
set the condition of the if statement (if empty return empty)
set the else condition (if ' ' return split)
return the value
*/

function getWords(string){
  var output = [];
  if (string === '') {
    return output;
  } else {
    return string.split(' ')
    }
  }

console.log('words:', 'Web Development')
