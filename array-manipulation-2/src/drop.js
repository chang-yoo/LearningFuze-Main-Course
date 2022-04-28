/* exported drop */
/*
function definition
assign an empty array to a variable
for loop and push the value that is equal or greater than count to the array assigned value
return variable
*/

function drop(array, count) {
  var arr = [];
  for (var i = count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
