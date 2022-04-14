/* exported swapChars */
/*
function definition
assign firstIndex to a variable
assing secondIndex to a variable
convert string to array to get each characters of string
and assign the index variables to array variable
convert back to string
*/
function swapChars(firstIndex, secondIndex, string){
  var x = string[firstIndex];
  var y = string[secondIndex];
  var arr = string.split('');
  arr[firstIndex] = y;
  arr[secondIndex] = x;
  return arr.join('');
}
