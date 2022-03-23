/* exported getLastCharacter */
function getLastCharacter(string){
  var lastIndex = string.length - 1
  var lastCharacter = string[lastIndex];
  return lastCharacter;
}

var getLastCharacterResult = getLastCharacter('he who shall not be named');
