/* exported isVowel */
/*
create a function with a if statement to check char is a vowel.
create a variable (vowel) with vowels value to comapare later
create a condition inside the if statement to see whether the char has vowel with uppercase or with lowercase
return true if so
return false if not
*/


function isVowel(character){
  var vowel = ['A', 'E', 'U', 'O', 'I'];
    for (var i = 0; i < vowel.length; i ++){
      if (character.toLowerCase() === vowel[i].toLowerCase()){
      return true;
    }
  }
  return false;
}

console.log('vowel: ', isVowel('E'))
