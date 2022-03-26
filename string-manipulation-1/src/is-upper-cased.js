/* exported isUpperCased */

/*
creat a function with a loop with a if statement inside to check if all index is uppercased
define a variable to make all letters uppercase
create a if statement to check if output is uppercase with the variable defined
return true if so, return false if not
*/

function isUpperCased(word){
  for (var i = 0; i < word.length; i++){
    var uppercase = word.toUpperCase();
    if (word === uppercase) return true;
    else return false;
  }
}

console.log('is LearningFuze upper cased: ', isUpperCased('LearningFuze'))
