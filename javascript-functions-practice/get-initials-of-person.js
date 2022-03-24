function getInitialsOfPerson(person){
  var initialOfFullName = person.firstName[0] + person.lastName[0];
  return initialOfFullName;
}

var joe = {
  firstName: 'Changhyun',
  lastName: 'Yoo'
}

var getInitialsOfPersonResult = getInitialsOfPerson(joe);
console.log('initials of person: ', getInitialsOfPersonResult)
