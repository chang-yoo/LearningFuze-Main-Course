/*
In users.js, complete the following tasks:
Query the DOM for the '#user-list' element.
Create a new XMLHttpRequest() object.
open() the xhr object to send a 'GET' request to 'https://jsonplaceholder.typicode.com/users'
Set the responseType
Listen for the 'load' event on the xhr object in order to:
log the status of the xhr object to the console
log the response of the xhr object to the console
loop through the response of the xhr object.
for each user object in the response, create an <li>, set its textContent to the user's name, and append it to the '#user-list' element
send() the request to begin loading the data from the server.
*/
var $ul = document.querySelector('#user-list');

function getUserName() {
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    var response = xhr.response;
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      var $li = document.createElement('li');
      $li.textContent = response[i].name;
      $ul.append($li);
    }
  });
  xhr.send();
}

getUserName();
