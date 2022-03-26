/* exported isLowerCased */

/*
creat a function with a loop with a if statement insdie
create a value to cehck if output is lowercase
compare the value with using ===
return true if so, return false if not
*/

function isLowerCased(word){
  var lowercase = word.toLowerCase();
  for (var i = 0 ; i < word.length; i++){
    if (word === lowercase) return true;
    else return false;
  }
}

var LearningFuze = 'LearningFuze';
var isLowerCasedResult = isLowerCased(LearningFuze);
console.log('is LearningFuze lowercase: ', isLowerCasedResult)
