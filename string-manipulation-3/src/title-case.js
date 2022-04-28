/* exported titleCase */

/*
create a function definition with one parementer that returns every first letter capitzliaed of words with conditions of :
  Capitalize the first word of the title and of any subtitle.
  Capitalize all “major” words (nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of hyphenated major words (e.g., Self-Report not Self-report).
  Capitalize all words of four letters or more.
define minor words to a variable so could be compared in for loop
assign JavaScript to a variable so could be compared in for loop
assign 'API' to a variable so could be compared in for loop
split the values into array if there is :
create a for loop that compares each values after first split
split the values from the first split by space with removing any whitespace at front or back
use for loop to compare the value if equal to minorwords or javascript or api
If there is a dash, the letter at dash index +1 is also capitalized
  create a empty string and assign to a variable
  slice that returns only first letter and apitalize the first letter
  slice that returns the values between first letter to dash
  slice that returns the value after dash and capitalize
  slice that returns the rest values
  assign all sliced values to emtpy string variable
  push the variable to array
find remaining values that didn't fit to prior if statments and slice them into two arrays, first letter -> make it capitalized and the rest -> lowercased
convert the array back to string with space
convert the converted array back to string with : and space
return the second converted string
*/

function titleCase(title) {
  var minorWords = ['and', 'or', 'nor,', 'but', 'a', 'an', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'for', 'the'];
  var JavaScript = 'JavaScript';
  var API = 'API';
  var arr = [];
  var toArr = title.split(':');
  var dash = '-';

  for (var i = 0; i < toArr.length; i++) {
    var toArr2 = toArr[i].trim().split(' ');
    var arr2 = [];
    for (var j = 0; j < toArr2.length; j++) {
      var lowerCase = toArr2[j].toLowerCase();
      if (lowerCase === API.toLowerCase()) {
        arr2.push(API);
      } else if (lowerCase === JavaScript.toLowerCase()) {
        arr2.push(JavaScript);
      } else if (minorWords.includes(lowerCase) && j !== 0) {
        arr2.push(lowerCase);
      } else if (lowerCase.includes(dash)) {
        var dashWord = '';
        var dashIndex = lowerCase.indexOf(dash);
        dashWord += lowerCase.slice(0, 1).toUpperCase();
        dashWord += lowerCase.slice(1, dashIndex + 1);
        dashWord += lowerCase.slice(dashIndex + 1, dashIndex + 2).toUpperCase();
        dashWord += lowerCase.slice(dashIndex + 2, lowerCase.length);
        arr2.push(dashWord);
      } else {
        var firstLetter2 = toArr2[j].slice(0, 1).toUpperCase();
        var restLetters2 = toArr2[j].slice(1).toLowerCase();
        var oneWord2 = firstLetter2 + restLetters2;
        arr2.push(oneWord2);
      }
    }
    arr.push(arr2.join(' '));
  }

  var toString = arr.join(': ');
  return toString;
}
