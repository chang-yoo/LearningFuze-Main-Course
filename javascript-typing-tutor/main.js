$letter = document.querySelectorAll('span');
document.addEventListener('keydown', typetutor);


var currentIndex = 0;

function typetutor(event) {
  var currentLetter = $letter[currentIndex].textContent;
  if (event.key === currentLetter){
    $letter[currentIndex].className = 'correct';
    $letter[currentIndex + 1].className = 'underline';
    currentIndex++;
  } else {
    $letter[currentIndex].className = 'incorrect underline-red'
  }
};
