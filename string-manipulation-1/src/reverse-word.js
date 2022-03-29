/* exported reverseWord */

/*
create a function with loop to get the value of every single index
define a variable to store the value of argument
set the conditionals to start from last index to 0
push the value to output variable
return output
*/

function reverseWord(word){
    var output = '';

    for (var i = word.length-1; i >= 0; i--){
      output += word[i];
    }

    return output;
  }

console.log('reverse word: ', reverseWord('foo'))
