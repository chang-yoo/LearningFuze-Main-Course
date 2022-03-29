$button = document.querySelector('.circle');
$background = document.querySelector('.background');
var click = ''

$button.addEventListener('click', function(){
  $button.className = 'circle ' + black()
  $background.className = 'background ' + blackcircle()
  click++;
})

function black(){
  if (click%2 !== 0) {
    return 'black'
  }
}


function blackcircle(){
  if (click%2 !== 0){
  return 'black-circle'
  }
}
