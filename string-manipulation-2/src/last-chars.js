/* exported lastChars */
/* function definition
return the charcters length from last to the last character,
so find out the length from the last and remove the rest
*/
function lastChars(length, string){
  var str = string.slice(-length);
  return str;
}
