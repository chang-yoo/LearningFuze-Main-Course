
function handleFocus(event){
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event){
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event){
  console.log(event.target.name, event.target.value);
}

var $name = document.querySelector('#user-name')
$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);


var $email = document.querySelector('#user-email')

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

var $message = document.querySelector('#user-message');

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
