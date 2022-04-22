/* exported takeRight */

/*
function definition
array.slice(start, end)
positive integer begins slicing from the right and negative integer begins slicing from the left
slice -count from array
*/

function takeRight(array, count) {
  return array.slice(-count);
}
