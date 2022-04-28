/* exported reverseWords */

/*
create a function definition that returns each word reversed, but the word in their original order
convert in to array using split(' ') so it separates to each index when there is a space
for loop to put the value backwards for each index
convert back to string
*/

function reverseWords(string) {
  var empty = [];
  var toArr = string.split(' ');

  for (var i = 0; i < toArr.length; i++) {
    for (var q = toArr[i].length; q >= 0; q--) {
      if (toArr[i][q] !== undefined) {
        empty.push(toArr[i][q]);
      } else {
        empty.push(' ');
      }
    }
  }
  var outcome = empty.join('');
  var result = outcome.substr(1);
  return result;
}
