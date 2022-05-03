/* exported invert */

/*
function definition with one parameter (source)
define a variable with empty value
for in loop through properties in source
assign the property to its value
assign the value to its property
return the variable
*/
function invert(source) {
  var object = {};
  for (var prop in source) {
    object[source[prop]] = prop;
  }
  return object;
}
