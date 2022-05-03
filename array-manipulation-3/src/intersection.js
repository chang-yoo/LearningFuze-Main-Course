/* exported intersection */

/*
function definition with two parameters that returns values only that both parameters have
assign an empty array to variable 1
for loop through first parameter to find if second parameter has that value
if so, find the index of that value in parameter 2 and push it to variable 1
return the variable 1
*/

function intersection(first, second) {
  var arr = [];
  for (var i = 0; i < first.length; i++) {
    var value = first[i];
    if (second.includes(value)) {
      var index = second.indexOf(value);
      arr.push(second[index]);
    }
  }
  return arr;
}
