/* exported getWords */

/*
create a function with a loop that has if statement within,
split the word if there is a space between words,
return the value
*/

function getWords(string){
    if (string === '') {
      return [];
    }
    else {
    return string.split(' ');
    }
  }
