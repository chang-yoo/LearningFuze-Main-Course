/* exported defaults */
/*
function definition with two parameters (target, source)
for in loop to check properties in source
Assigns properties of source object to the target object for all properties that are not defined on target
if the value is undeifined
assign source prop value to target prop value
*/
function defaults(target, source) {
  for (var prop in source) {
    if (target[prop] === undefined) {
      target[prop] = source[prop];
    }
  }
}
