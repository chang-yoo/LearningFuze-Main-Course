/* exported findIndex */

function findIndex(array, value){
  var output = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] === value){
      return i;
    }
  }
  return -1;
}
console.log(findIndex([1,3,5],5));
