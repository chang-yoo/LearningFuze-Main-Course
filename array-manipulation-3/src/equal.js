/* exported equal */

/*
function defnition that returns boolean output if values from two argument are equal -> true; if not -> false
compare if they have same length first. If not -> false
create a for loop to compare if they have same value at same index. If not -> false
if the values don't fit into above two comparasions, return true;
*/
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  } return true;
}
