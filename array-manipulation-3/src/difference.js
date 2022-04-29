/* exported difference */

/*
function definition with two parementers that returns values in array that are unique, if not unique deleted from the array
assign an empty array to a variable 1
push first to variable 1
check if array includes value of each index of second parameter
if so, delete the value in array, if not push the value to variable 1
return the variable 1
*/

function difference(first, second) {
  var arr = [];
  for (var i = 0; i < first.length; i++) {
    arr.push(first[i]);
  }
  for (var q = 0; q < second.length; q++) {
    var value = second[q];
    if (arr.includes(value)) {
      var index = arr.indexOf(value);
      arr.splice(index, 1);
    } else {
      arr.push(value);
    }
  }
  return arr;
}
