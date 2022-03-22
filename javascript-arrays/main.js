var colors;
colors =['red','white', 'blue'];
console.log('value of color[0]:', colors[0]);
console.log('value of color[1]:', colors[1]);
console.log('value of color[2]:', colors[2]);

var america = 'America is' + " " + colors[0] + ", " + colors[1] + ", and " + colors[2];
console.log(america);

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ", " + colors[1] + ", and " + colors[2]);

console.log(colors);

var students;
students = ['Joe','Jin','Jay','Jim'];
numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');
var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];
console.log('The last student in the array is ' + lastStudent);

console.log(students);
