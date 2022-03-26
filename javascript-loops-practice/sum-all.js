/* exported sumAll */
function sumAll(numbers){
  var output = 0;
  for (var i = 0; i < numbers.length; i++){
    output += numbers[i];
  }
  return output;
}
console.log('sum all: ', sumAll([1200, 1, 0]))
