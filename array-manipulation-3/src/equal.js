/* exported equal */

/*
function defnition that returns boolean output if values from two argument are equal -> true; if not -> false
assign two empty arrays to two variables
create for loop for each values and push to each array if they have same values for each index
compare two variables and return true if they are equal
*/
function equal(first, second) {
  var arr1 = [];
  var arr2 = [];
  if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        arr1.push(first[i]);
        arr2.push(second[i]);
      }
    }
  }
}
