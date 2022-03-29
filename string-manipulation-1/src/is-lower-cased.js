/* exported isLowerCased */

/*
creat a function to check if an argument is lowercased
define a variable to make all letters lowercase
create a if statement to check if output is lowercase with the variable defined
return true if so, return false if not
*/

function isLowerCased(word){
  var lowercase = word.toLowerCase();
  if (word === lowercase) {
    return true;
  } else {
    return false;
  }
}

console.log('is LearningFuze lowercase: ', isLowerCased('LearningFuze'))
