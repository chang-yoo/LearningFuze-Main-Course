/* exported truncate */

/*
create a function define
create an if statement with the coditionals at the most
add ellipsis if true
*/

function truncate (length, string){
  var output = '';
  if (length > string.length){
    output = string[length] + '...';
  }
  return output;
}
