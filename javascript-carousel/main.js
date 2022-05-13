var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/039.png', 'images/025.png'];
var carousel = setInterval(changeImage(images), 3000);
clearInterval(carousel);

function changeImage(object) {
  var $img = document.querySelector('.images');
  for (var i = 0; i < images.length; i++) {
    $img.setAttribute('src', object[i]);
  }
  return $img;
}

const $rightI = document.querySelector('.right-angle');
// console.log($rightI);

const $image = document.querySelector('.images');
// console.log($image);
$rightI.addEventListener('click', nextImage);
function nextImage(event) {
  $image.setAttribute();
}
