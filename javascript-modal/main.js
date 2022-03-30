$container = document.querySelector('.container');
$modal = document.querySelector('.modal');
$fixed = document.querySelector('.fixed');
$buttonBox = document.querySelector('.button-box');
$popUpButton = document.querySelector('.pop-up-button');

$modal.addEventListener('click', function(){
  $fixed.classList.remove('none');
  $container.className = 'container ' + 'background-color';
  $modal.className = 'modal ' + 'pointer-none';
});

$popUpButton.addEventListener('click', function(){
  $fixed.className = 'fixed ' + 'none';
  $container.classList.remove('background-color');
  $modal.classList.remove('pointer-none');
})
