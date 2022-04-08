/* exported ransomCase */
function ransomCase(string){
  var output = '';
  for (var i = 0 ; i < string.length; i++){
  if (i%2 !== 0){
    output += string[i].toUpperCase();
  } else {
    output += string[i].toLowerCase();
  }
  }
  return output
}
