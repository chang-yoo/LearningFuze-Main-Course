$button = document.querySelector('.circle');
$background = document.querySelector('.background');
var click = true;

$button.addEventListener('click', function(){
  if (click === true){
    $button.className = 'circle black';
    $background.className = 'background black-color';
    click = false;
  } else {
    $button.className = 'circle yellow';;
    $background.className = 'background yellow-color';
    click = true;
  }
});
