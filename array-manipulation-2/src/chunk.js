/* exported chunk */

function chunk(array, size) {
  var arr = [];
  for (var i = 0; i < array.length; i += size) {
    var output = array.slice(i, i + size);
    arr.push(output);
  }
  return arr;
}

/*
function definition
assign an empty array to a variable that to be returned at the end
for loop the array to slice the array add size value to end index number
push the value from slicing array to empty array
return the variable assgined at beginning
*/
