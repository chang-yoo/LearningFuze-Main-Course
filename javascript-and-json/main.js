var books = [{
  isbn: 'ads',
  title: 'qwrq',
  author: 'qerqw'
},
{
  isbn: 'asdfa',
  title: 'qwf',
  author: 'qwfqe'
},
{
  isbn: 'fqfefq',
  title: 'qfqef',
  author: 'qfqf'
}];
console.log('type of bookShelves:', typeof books);

var stringify = JSON.stringify(books);
console.log('value of stringify', stringify);
console.log('typeof stringify:', typeof stringify);

var student = '{"id": 12412, "name": "joe"}';
console.log('type of student', typeof student)

var parse = JSON.parse(student);
console.log(parse);
console.log('type of parse:', typeof parse);
