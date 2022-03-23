/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person){
  var descriptionOfPerson = {
    name: person.name,
    occupation: person.occupation,
    birthPlace: person.birthPlace
  };
  var toSentence = person.name + " is a " + person.occupation + " from " + person.birthPlace + ".";
  return toSentence;
}

var getDescriptionOfPersonResult = getDescriptionOfPerson();
console.log(getDescriptionOfPersonResult);
