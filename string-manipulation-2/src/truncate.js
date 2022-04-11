/* exported truncate */
/*
 function definition
 find where to take out the letters and add ...
 */

function truncate (length, string){
  var output =  string.slice(0, length) + '...';
  return output;
}
