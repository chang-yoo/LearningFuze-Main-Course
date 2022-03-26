/* exported capitalize */

/*
create a function with the for loop inside in order to loop the index of argument.
use if statement to make 0 index capitalized
set else to make lowercase to the rest index
return output
*/

function capitalize(word){
  var output = '';

  for (var i = 0; i < word.length; i++){
    if (i === 0) {
      output = word[i].toUpperCase();
    } else {
      output += word[i].toLowerCase();
    }
  }
  return output;
}

console.log('capitalized: ', capitalize('hookshot'));
