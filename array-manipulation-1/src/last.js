/* exported last */
/* createa a function with loop to check all values of argument
create a variable and define it as argument.length-1 to find last index number
use that variable as index and return it
*/

function last(array){
  var lastIndex = array.length -1;
  for (var i = 0; i <array.length; i++){
    return array[lastIndex];
  }
}

console.log('last element: ', last(['foo','bar','baz']));
