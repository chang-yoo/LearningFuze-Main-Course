function getFirstInitialOfPerson(person){
  var nameOfPerson = {fistName: person.firstName, lastName: person.lastName};
  var fullName = person.firstName + person.lastName;
  var firstInitialOfPerson = fullName[0];
  return firstInitialOfPerson;
}

var getFirstInitialOfPersonResult = getFirstInitialOfPerson();
