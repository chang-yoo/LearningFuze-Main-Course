function convertMinutesToSeconds(minutes){
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5)
console.log('value of convertMinutesToSeconds: ', convertMinutesToSecondsResult);

function greet(name){
  var greeting = 'Hey, ' + name;
  return greeting;
}
var greetResult = greet('Beavis')
console.log('value of greetResult: ', greetResult);

function getArea (width, height){
  var area = width * height;
  return area;
}
var getAreaResult = getArea(17, 42);
console.log('value of getAreaResult: ', getAreaResult);


function getFirstName(person){
  var getFirstNameResult = person.firstName;
  return getFirstNameResult;
}
var getFirstNameResult = getFirstName({ firstName: 'changhyun', lastName: 'Yoo' })
console.log('value of getFirstNameResult: ', getFirstNameResult);

function getLastElement(array){
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var getlastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value of getLastElementResult: ', getlastElementResult);
