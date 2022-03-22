function convertMinutesToSeconds(minutes){
  var convertMinutesToSecondsResult = minutes * 60;
  console.log('value of convertMinutesToSeconds: ', convertMinutesToSecondsResult);
}

convertMinutesToSeconds(5);

function greet(name){
  var greeting = 'Hey, ' + name;
  console.log('value of greet: ', greeting);
}

greet('Beavis');

function getArea (width, height){
  var resultOfArea = width * height;
  console.log('value of getArea: ', resultOfArea);
}

getArea(17, 42);

function getFirstName(person){
  var getFirstNameResult = person.firstName;
    console.log('value of getFirstName: ', getFirstNameResult);
}

getFirstName({firstName: 'changhyun', lastName:'Yoo'});


function getLastElement(array){
  var lastElementIndex = array.length - 1;
  var getLastElementResult = getLastElement[lastElementIndex];
  console.log('value of getLastElement: ', getLastElementResult)
}

getLastElement(['propane', 'and', 'propane', 'accessories']);
