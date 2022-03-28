/* exported tail */
/*
create a function with loop to check every single values of argument
define the variable i = 1 for the initialization of loop condition
define a variable with an empty array
push the values from the loop into the output
return output
*/

function tail(array){
  var output = [];
  for (var i = 1; i < array.length; i++){
    output.push(array[i]);
  }
  return  output;
}

console.log('all elements after the first: ', tail(['foo','bar','baz']));
