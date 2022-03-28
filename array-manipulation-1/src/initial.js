/* exported initial */
/*
create a function with loop to check every single index of argument
define a variable to find last index of argument
define another variable with an empty array'
set the lastindex variable to the condition of for loop and -1 to avoid getting value of last index
push the values to the output
return the output
*/

function initial(array){
  var output = [];
  var lastIndex = array.length-1;
  for (var i = 0; i < lastIndex; i++){
    output.push(array[i]);
  }
  return output;
}

console.log('all elements except the last: ', initial(['foo', 'bar', 'baz']));
