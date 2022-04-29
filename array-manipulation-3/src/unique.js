/* exported unique */

/*
create a function that returns values that are unique (no repetitive)
assign an empty arry to a variable 1
for loop to find if the value if unique
if unique -> push it to variable
return the variable 1
*/

function unique(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (arr.includes(array[i])) {
      array[i] = '';
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}
