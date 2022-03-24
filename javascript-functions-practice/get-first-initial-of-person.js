function getFirstInitialOfPerson(person){
  var fullName = person.firstName + person.lastName;
  var firstInitialOfPerson = fullName[0];
  return firstInitialOfPerson;
}

var joe = {
  firstName: 'changhyun',
  lastName: 'Yoo'
}

var getFirstInitialOfPersonResult = getFirstInitialOfPerson(joe);
console.log('first initial of person: ', getFirstInitialOfPersonResult)
