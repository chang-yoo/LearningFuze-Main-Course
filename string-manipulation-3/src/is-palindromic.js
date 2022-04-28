/* exported isPalindromic */

/*
create a function definition with one parameter that checks if an argument is palindrome
take out space from the object and assign it to value
assign two empty arrays to each variable
for loop to put each letters to empty array
create another for loop to put letters backward to another empty array
compare if they are equal to each other
if so return true
*/

function isPalindromic(string) {
  var noSpace = string.split(' ');
  var toString = noSpace.join('');
  var empty = [];
  var backward = [];
  for (var i = 0; i < toString.length; i++) {
    empty += toString[i];
  }
  var lastIndex = toString.length - 1;
  for (var q = lastIndex; q >= 0; q--) {
    backward += toString[q];
  }
  if (empty === backward) {
    return true;
  } else {
    return false;
  }
}
