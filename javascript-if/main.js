/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number){
  var isNumberUnderFive = number<5;
  return isNumberUnderFive;
}
console.log('Is this number less than five?: ', isUnderFive(4));
console.log('Is this number less than five?: ', isUnderFive(10));
console.log('Is this number less than five?: ', isUnderFive(5));

function isEven(number){
  var isNumberEven = (number%2) === 0;
  return isNumberEven;
}

console.log('Is this even number?: ', isEven(4));
console.log('Is this even number?: ', isEven(10));
console.log('Is this even number?: ', isEven(5));

function startsWithJ(string){
  if (string[0] === 'J'){
  return true;
} else {
  return false;
}
}
console.log('Does it start with a letter J?: ', startsWithJ('Javascript'));
console.log('Does it start with a letter J?: ', startsWithJ('PHP'));
console.log('Does it start with a letter J?: ', startsWithJ('HTML'));
console.log('Does it start with a letter J?: ', startsWithJ('JAVA'));
console.log('Does it start with a letter J?: ', startsWithJ('Kotlin'));
console.log('Does it start with a letter J?: ', startsWithJ('C#'));

var human = {
  name: 'yoo',
  age: 27
}

function isOldEnoughToDrink(person){
  if (person.age >= 21){
    return true;
  } else {
    return false;
  }
}

console.log('Is Joe old enough to drink?: ', isOldEnoughToDrink(human));

var human = {
  name: 'joe',
  age: 27
}

function isOldEnoughToDrive(person){
  if (person.age>=16){
  return true;
} else {
  return false;
}
}
console.log('Is Joe old enough to drive?:', isOldEnoughToDrive(human));

var human = {
  name: 'joe',
  age: 27
}

function isOldEnoughToDrinkAndDrive(person){
  return false;
}

console.log('Is Joe enough to drink and drive?: ', isOldEnoughToDrinkAndDrive(human));

function categorizeAcidity(pH){
  if (pH === 7){
    return 'neutral';
  } else if (0 < pH && pH < 7) {
    return 'acid';
  } else if (8 < pH && pH <14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

console.log('level of acidity: ', categorizeAcidity(-1));
console.log('level of acidity: ', categorizeAcidity(18));
console.log('level of acidity: ', categorizeAcidity(7));
console.log('level of acidity: ', categorizeAcidity(2));
console.log('level of acidity: ', categorizeAcidity(9));

function introduceWarnerBro(name){
  if (name === 'yakko' || name === 'wakko'){
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm so cute~";
  } else {
    return "Goodnight everybody!";
  }
}

console.log(introduceWarnerBro('yakko'));
console.log(introduceWarnerBro('wakko'));
console.log(introduceWarnerBro('dot'));
console.log(introduceWarnerBro('cody'));
console.log(introduceWarnerBro('minerva'));
