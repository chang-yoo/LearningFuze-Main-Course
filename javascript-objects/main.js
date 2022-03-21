var student = {
  firstName: 'Changhyun',
  lastName: 'Yoo',
  age: 27,
}

var fullName = student.firstName + " " + student.lastName;
console.log(fullName);

student.livesInIrvine = false;
student.previousOccupation = 'assistant production';

console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('typeof student.livesInIrvine', typeof student.livesInIrvine);

console.log('value of sutdent.previousOccupation:', student.previousOccupation);
console.log('typeof student.previousOccupation:', typeof student.previousOccupation);

var vehicle = {
  make: 'mercedes',
  model: 'GLC-300',
  year: 2019,
}

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of vehicle[color]:', vehicle['color']);
console.log("typeof vehicle['color']:", typeof vehicle['color']);

console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log("typeof of vehicle['isConvertible']:", typeof vehicle['isConvertible']);

console.log(vehicle);

var pet = {
  name: 'Dali',
  type: 'cat',
}

delete pet.name;
delete pet.type;
console.log('value of pet', pet);
