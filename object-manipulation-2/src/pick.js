/* exported pick */
/*
function definition with two parameters (source, keys)
define an empty variable
for loop to find if keys are in the object
if so assign them into empty array variable
return the variable
*/

function pick(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      object[keys[i]] = source[keys[i]];
    }
  }
  return object;
}
