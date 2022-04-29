/* exported union */

/*
create a function definition that returns values that are unique in two parameters and order they appear
assign an empty array to variable 1
for loop to push the values of first parameter to variable 1
check if values of second parameter alreay exist in variable 1
if not, push it to variable 1
return variable 1
*/

function union(first, second) {
  var arr = [];
  for (var i = 0; i < first.length; i++) {
    arr.push(first[i]);
  }
  for (var q = 0; q < second.length; q++) {
    var value = second[q];
    if (arr.includes(value)) {
      value = '';
    } else {
      arr.push(value);
    }
  }
  return arr;
}
