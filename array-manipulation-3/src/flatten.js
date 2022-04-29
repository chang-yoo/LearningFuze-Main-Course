/* exported flatten */

/*
create a function with one parameter that returns the values in an array and flattens array by one level if values were inside of another array
assign an empty arry to a variable
check to if if the value has an array if so loop and push just the value to the variable assigned previously
if not push it to the variable
return the vairable
*/

function flatten(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (var q = 0; q < array[i].length; q++) {
        arr.push(array[i][q]);
      }
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}
