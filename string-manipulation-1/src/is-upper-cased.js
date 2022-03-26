/* exported isUpperCased */

/*
create a function with a for loop with an initialization, a condition, and a final expression.
create a variable to check if the string is uppercased
creat if statement to return true if string is uppercased, else return false

*/

function isUpperCased(word){
  for (var i = 0; i < word.length; i++){
    var uppercase = word.toUpperCase();
    if (word === uppercase) return true;
    else return false;
  }
}

var LearningFuze = 'LearningFuze';
var isUpperCasedResult = isUpperCased(LearningFuze)
console.log('is LearningFuze upper cased: ', isUpperCasedResult)
