/* exported titleCase */
/*
create a function definition with one parementer that returns every first letter capitzliaed of words
define minor words to a variable
assign JavaScript to a variable
assign 'API' to a variable
split them into array if there is a space between words
compare each index to each variable and see if they match
if match, return to that value
if doesn't match, then follow the
  Capitalize the first word of the title and of any subtitle.
  Capitalize all “major” words (nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of hyphenated major words (e.g., Self-Report not Self-report).
  Capitalize all words of four letters or more.
*/

function titleCase(title) {
  var minorWords = ['and', 'or', 'nor,', 'but', 'a', 'an', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var JavaScript = 'JavaScript';
  var API = 'API';
  var toArr = title.split(' ');
  var arr = [];
  for (var i = 0; i < toArr.length; i++) {
    for (var q = toArr[i]; q < toArr[i].length; q++) {
      if (toArr[i][q].toUpperCase === JavaScript.toUpperCase()) {
        arr.push(JavaScript);
      } else if (toArr[i][q].toUpperCase() === API) {
        arr.push(API);
      } else if (toArr[i][q].toLowerCase === minorWords) {
        arr.push(toArr[i][q].toLowerCase());
      } else {
        var firstLetter = toArr[i][0].toUpperCase();
        var restLetter = toArr[i][q].slice(1);
        var lowerCase = restLetter.toLowerCase();
        var oneWord = firstLetter + lowerCase;
        arr.push(oneWord);
      }
    }
  } var result = arr.join(' ');
  return result;
}
