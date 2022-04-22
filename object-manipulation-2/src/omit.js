/* exported omit */
/*
function defnition with two paramter (source, keys)
assign an empty value to a variable
define empty value to a variable
for in loop through properties in source and assign it to properties in a variable
for loop through keys find if there is a duplicate value for keys in object properties
if there is one, delete that property
return the variable
*/

function omit(source, keys) {
  var object = {};
  for (var prop in source) {
    object[prop] = source[prop];
  }
  for (var i = 0; i < keys.length; i++) {
    if (object[keys[i]] !== undefined) {
      delete object[keys[i]];
    }
  } return object;
}
