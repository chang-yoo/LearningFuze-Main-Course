/* exported head */
/*
create a function with loop to check the argument
use index 0 to return the first element
*/

function head(array){
  for (var i = 0; i < array.length; i++);
  return array[0];
}

console.log('first element: ', head('foo'));
