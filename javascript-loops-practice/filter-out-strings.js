/* exported filterOutStrings */

function filterOutStrings(values){
  var output = [];
  for (var i = 0; i < values.length; i++){
    if (typeof values[i] !== 'string'){
      output.push(values[i]);
    }
  }
  return output;
}

console.log(filterOutStrings([1,3,5,'x']));
