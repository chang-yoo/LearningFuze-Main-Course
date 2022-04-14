/* exported getKeys */

/* create a function
create a variable and set the value to an empty array
use for in because we are defining properties of object
push the value to output
return the output
*/


function getKeys(object){
  var output = [];
  for (var prop in object){
    output.push(prop);
  }
  return output
}
