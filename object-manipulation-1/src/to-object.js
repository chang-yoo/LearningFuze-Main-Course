/* exported toObject */

/*
object[propery] = value;
create a function
assign a variable (obj) with an empty curly brace
assign a variable (prop) as first property of keyValuePair
assign a variable (val) as second property of keyValuePair
in order to change the second string to a value, need to make it equl to obj[prop]
return obj
*/

function toObject(keyValuePair){
  var obj = {};
  var prop = keyValuePair[0];
  var val = keyValuePair[1];
  obj[prop] = val;
  return obj
}
