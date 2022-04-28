/* exported isAnagram */

/*
create a function definition that compares each letter of firstString to secondString
convert each argument to array and use sort() method to set up the letters in alphabetical order and convert back to string
compare two variables if they are same
if so, return true and if not return false
*/

function isAnagram(firstString, secondString) {
  var noSpace1 = firstString.replaceAll(' ', '');
  var noSpace2 = secondString.replaceAll(' ', '');
  var arr1 = noSpace1.split('');
  var arr2 = noSpace2.split('');
  var sortArr1 = arr1.sort();
  var sortArr2 = arr2.sort();
  var string1 = sortArr1.join('');
  var string2 = sortArr2.join('');
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}
