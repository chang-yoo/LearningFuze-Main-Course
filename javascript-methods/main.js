var num1 = 35;
var num2 = 10;
var num3 = 40;

var maximumValue = Math.max(num1, num2, num3);
console.log(maximumValue)

var heroes = ['IronMan', 'Hulk', 'Captain America', 'Spiderman'];

function getRandom(){
  return Math.random();
}

console.log(getRandom());

var randomNumber = getRandom() * heroes.length;
console.log(randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);

var randomHero = heroes[randomIndex];
console.log(randomHero);


var library = [{
  title: 'first book' ,
  author: 'first'
},
{
  title: 'middle',
  author: 'middle'
},
{
  title: 'last book',
  author: 'last'
}];

var lastBook = library.pop();
console.log(lastBook);

var firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}

library.push(js);
library.unshift(css);

library.splice(1, 1);

console.log(library);


var fullName = 'Changhyun Yoo';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

var firstName = firstAndLastName[0];
console.log(firstName);

var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
