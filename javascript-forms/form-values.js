var contactForm = document.querySelector('#contact-form')

function handleSubmit(event){
  event.preventDefault();
  var valueName = contactForm.elements.name.value;
  var valueEmail = contactForm.elements.email.vaue;
  var valueMessage = contactForm.elements.message.value;
  var messageData = {
    name: valueName,
    email: valueEmail,
    message: valueMessage,
  }
  console.log(messageData);
  contactForm.reset()
}

contactForm.addEventListener('submit', handleSubmit);
