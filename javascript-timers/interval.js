var $countdown = document.querySelector('.countdown-display');
console.log($countdown.textContent)
var intervalId = setInterval(countdown, 1000)

function countdown(){
  $countdown.textContent--;
  if ($countdown.textContent > '0'){
    $countdown.textContent
  }
  else if ($countdown.textContent === '0') {
    $countdown.textContent = '~Earth Beeeelooowww Us~'
    clearInterval(intervalId);
  }
}
