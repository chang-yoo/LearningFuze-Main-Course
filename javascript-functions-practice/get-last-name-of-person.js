/* exported getLastNameOfPerson */
function getLastNameOfPerson(person){
  var lastNameOfPerson = person.lastName;
  return lastNameOfPerson;
}

var joe = {
  lastName: 'Yoo'
}

var getLastNameOfPersonResult = getLastNameOfPerson(joe);

console.log('last name of person: ', getLastNameOfPersonResult);
