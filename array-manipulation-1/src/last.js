/* exported last */
/* create a function def.
create a variable and define it as argument.length-1 to find last index number
use that variable as index and return it
*/

function last(array){
  var lastIndex = array.length -1;
    return array[lastIndex];
}

console.log('last element: ', last(['foo','bar','baz']));
