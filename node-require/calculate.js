const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');
const [, , x, expression, y] = process.argv;

const num1 = Number(x);
const num2 = Number(y);

if (expression === 'plus') {
  add(num1, num2);
  console.log('result:', add(num1, num2));
} else if (expression === 'minus') {
  subtract(num1, num2);
  console.log('result:', subtract(num1, num2));
} else if (expression === 'over') {
  divide(num1, num2);
  console.log('result:', divide(num1, num2));
} else if (expression === 'times') {
  multiply(num1, num2);
  console.log('result:', multiply(num1, num2));
}
