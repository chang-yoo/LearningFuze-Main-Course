/* exported capitalize */

/* create a for loop within the function
give initializaiton, condition, and final expression for loop
create if statement to return the value to
use .uppercase() to the string with first index number.
*/

function capitalize(word){
  var cap = '';

  for (var i = 0; i < word.length; i++){
    if (i === 0) {
      cap = word[i].toUpperCase();
    } else {
      cap += word[i].toLowerCase();
    }
  }
  return cap;
}

console.log(capitalize('cap'));
