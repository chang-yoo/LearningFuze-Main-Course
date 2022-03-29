/* exported reverse */
/*
create a function with loop
define a variable with an empty array
define another variable to find last index of argument
set the conditon of loop as (var i = lastindex; i >=0; i--)
push the returned value from loop to emptry array
return output
*/

function reverse(array){
  var output = [];
  var lastIndex = array.length -1;
  for (var i = lastIndex; i >= 0; i--){
    output.push(array[i]);
  }
  return output;
}
console.log('all element in reverse order: ', reverse(['foo', 'bar', 'baz']));
