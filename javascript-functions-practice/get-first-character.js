/* exported getFirstCharacter */
function getFirstCharacter(string){
  var firstCharacter = string[0];
  return firstCharacter;
}

var getFirstCharacterResult = getFirstCharacter('he who shall not be named');
console.log('get first character: ', getFirstCharacterResult);
