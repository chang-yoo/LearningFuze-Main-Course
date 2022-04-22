/* exported includes */
/*
function definition
use for loop to find if value is inside of array
return true if it has it or return false
*/
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
