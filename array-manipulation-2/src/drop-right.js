/* exported dropRight */
/*
function definition
assign an emptry array to a variable
find a new length for array (subtract count from current length)
for loop and push the value to array assigned variable
return the variable
*/

function dropRight(array, count) {
  var arr = [];
  var newLength = array.length - count;
  for (var i = 0; i < newLength; i++) {
    arr.push(array[i]);
  } return arr;
}
