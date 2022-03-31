$layout = document.querySelector('.layout');
$modal = document.querySelector('.modal');
$fixed = document.querySelector('.fixed');
$popUpButton = document.querySelector('.pop-up-button');

$modal.addEventListener('click', function(){
  $fixed.classList.remove('none');
  $layout.className = 'layout ' + 'background-color';
  $modal.className = 'modal ' + 'pointer-none';
});

$popUpButton.addEventListener('click', function(){
  $fixed.className = 'fixed ' + 'none';
  $layout.className ='layout';
  $modal.className = 'modal';
})
