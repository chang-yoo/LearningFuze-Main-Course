/* exported isUpperCased */

/*
creat a function to check if an arugment is uppercased
define a variable to make all letters uppercase
create a if statement to check if output is uppercase with the variable defined
return true if so, return false if not
*/

  function isUpperCased(word){
      var uppercase = word.toUpperCase();
    if (word === uppercase) {
        return true;
      } else {
        return false;
      }
  }
console.log('is LearningFuze upper cased: ', isUpperCased('LearningFuze'));
