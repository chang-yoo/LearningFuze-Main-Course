/* exported getCharacterAtIndex */
function getCharacterAtIndex(string, index){
  var characterAtIndex = string[index];
  return characterAtIndex;
}

var getCharacterAtIndexResult = getCharacterAtIndex('he who shall not be named', 17);
console.log('character at index: ', getCharacterAtIndexResult)
