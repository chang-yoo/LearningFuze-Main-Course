/* exported zip */
/*
function definition with two parameters that would return values in same index number in each array
asssign an empty array to a variable1
assign another empty arry to a variable2
create if statement to set each parameter's equal to each other
create a loop and set the conditions to length of first parameter
create a if statement to set if they have same index number
push it to empty array variable
create another for loop to slice two values in variabl 1 so the new value has each varaible 1 with array
return the variable2
*/

function zip(first, second) {
  var arr = [];
  var arr2 = [];
  if (first.length > second.length) {
    first.length = second.length;
  }
  for (var i = 0; i < first.length; i++) {
    var firstValue = first[i];
    var secondValue = second[i];
    arr.push(firstValue, secondValue);
  }
  for (var q = 0; q < arr.length; q++) {
    if (q % 2 === 0) {
      var sliced = arr.slice(q, q + 2);
      arr2.push(sliced);
    }
  }
  return arr2;
}
