var $name = document.forms[0].name;
var $email = document.forms[0].email;
var $message = document.forms[0].message;

function prevent(event) {
  event.preventDefault();
};

$name.addEventListener('submit', prevent);

$email.addEventListener('submit', prevent);

$message.addEventListener('submit', prevent);

var messageData = {name: $name.value, email: $email.value, message: $message.value}
console.log(messageData);
