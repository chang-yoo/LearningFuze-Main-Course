/* exported isLowerCased */

/*
creat a function with a loop with a if statement inside to check if all index is lowercased
define a variable to make all letters lowercase
create a if statement to check if output is lowercase with the variable defined
return true if so, return false if not
*/

function isLowerCased(word){
  var lowercase = word.toLowerCase();
  for (var i = 0 ; i < word.length; i++){
    if (word === lowercase) return true;
    else return false;
  }
}

console.log('is LearningFuze lowercase: ', isLowerCased('LearningFuze'))
