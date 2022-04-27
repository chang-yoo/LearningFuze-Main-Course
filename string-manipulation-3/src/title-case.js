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
  var minorWords = ['and', 'or', 'nor,', 'but', 'a', 'an', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'for'];
  var JavaScript = 'JavaScript';
  var API = 'API';
  var arr = [];
  var toArr = title.split(' ');
  for (var i = 0; i < toArr.length; i++) {
    if (toArr[i].toLowerCase() === API.toLowerCase()) {
      toArr[i] = API;
      arr.push(toArr[i]);
    } else if (toArr[i].toLowerCase() === JavaScript.toLowerCase()) {
      toArr[i] = JavaScript;
      arr.push(toArr[i]);
    } else {
      var lowerCase = toArr[i].toLowerCase();
      for (var q = 0; q < minorWords.length; q++) {
        if (lowerCase === minorWords[q]) {
          toArr[i] = minorWords[q];
          arr.push(toArr[i]);
        } else if (lowerCase !== minorWords[q] && lowerCase !== undefined) {
          var firstLetter = toArr[i].slice(0, 1).toUpperCase();
          var restLetters = toArr[i].slice(1).toLowerCase();
          var oneWord = firstLetter + restLetters;
        }
      } arr.push(oneWord);
    }
  } var toString = arr.join(' ');
  return toString;
}

//       for (var w = 0; w < toArr[i].length; w++) {
//         if (toArr[i][w] === dash) {
//           var afterDashLetterLow = toArr[i][w + 1];

//           var afterDashLetter = toArr[i][w + 1].toUpperCase();
//           afterDashLetter.replace(afterDashLetterLow);
//         }
//       }
//     }
//   } var backToString = arr.join(' ');
// }
