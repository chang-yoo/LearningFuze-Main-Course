/* exported truncate */
/*
 create a function and use splice metho and add ...
 */

function truncate (length, string){
  var output =  string.slice(0, length) + '...';
  return output;
}
