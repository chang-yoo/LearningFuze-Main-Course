/* exported getSecondCharacter */
function getSecondCharacter(string){
  var secondCaracter = string[1];
  return secondCaracter;
}

var getSecondCharacterResult = getSecondCharacter('he who shall not be named');
console.log('second character: ', getSecondCharacterResult)
