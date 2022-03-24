/* exported getLastElement */
function getLastElement(array){
  var index = array.length - 1
  var lastElement = array[index];
  return lastElement;
}
var getLastElementResult = getLastElement(['i', 'tell', 'you', 'what']);

console.log('last element: ', getLastElementResult);
