/* exported getValues */

/*
create a function
define a variable to an empty array (output)
use for in object because we are defining properteis of object
push the value to empty array
return output
*/

function getValues(object){
  var prop = [];
  for (var val in object){
    prop.push(object[val])
  }
  return prop
}
