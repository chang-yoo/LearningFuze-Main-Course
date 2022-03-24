/* exported getFullNameOfPerson */
function getFullNameOfPerson(person){
  var fullNameOfPerson = person.firstName + " " + person.lastName;
  return fullNameOfPerson;
}

var joe = {
  firstName: 'changhyun',
  lastName: 'Yoo'
}

var getFullNameOfPersonResult = getFullNameOfPerson(joe);
console.log('full name of person: ', getFullNameOfPersonResult)
