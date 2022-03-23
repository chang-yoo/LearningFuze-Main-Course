/* exported getFullNameOfPerson */
function getFullNameOfPerson(person){
  var nameOfPerson = {firstName:'Leu', lastName:'Verou'};
  var fullNameOfPerson = person.firstName + " " + person.lastName;
  return fullNameOfPerson;
}

var getFullNameOfPersonResult = getFullNameOfPerson();
