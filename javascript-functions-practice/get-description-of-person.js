/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person){
  var toSentence = person.name + " is a " + person.occupation + " from " + person.birthPlace + ".";
  return toSentence;
}

var joe = {
  name: 'changhyun',
  occupation: 'student',
  birthPlace: 'Korea'
}

var getDescriptionOfPersonResult = getDescriptionOfPerson(joe);
console.log('description of person: ', getDescriptionOfPersonResult);
