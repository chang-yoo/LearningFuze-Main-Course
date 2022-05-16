const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const sum = numbers.reduce((x, y) => x + y);
console.log(sum);

const product = numbers.reduce((x, y) => x * y);
console.log(product);

const balance = account.reduce((previous, current) => {
  if (current.type === 'deposit') {
    return previous + current.amount;
  }
  return previous - current.amount;
}, 0);
console.log(balance);

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const composite = traits.reduce((previous, current) => {
  return Object.assign(previous, current);
}, {});
console.log(composite);
