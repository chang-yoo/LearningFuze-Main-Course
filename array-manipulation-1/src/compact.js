/* exported compact */
/*
create a function with loop to check every single values of argument
define a variable to an emptry array
create an if statement to check if arguement is falsy;
if not push it to emtpry variable
return variabke
*/
function compact(array){
  var output = [];
  for (var i = 0; i < array.length; i++){
    if (array[i]){
      output.push(array[i]);
    }
  } return output
}

console.log(compact('hi'));
