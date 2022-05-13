var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/039.png', 'images/025.png'];
let imageIndex = 0;

const $image = document.querySelector('.images');

const carousel = setInterval(function () {
  imageIndex++;
  $image.setAttribute('src', $image[imageIndex]);
  if (imageIndex === images.length - 1) {
    imageIndex = 0;
  }
}, 3000);

clearInterval(carousel);

const $rightArrow = document.querySelector('.right-angle');
// console.log($rightArrow);

$rightArrow.addEventListener('click', nextImage);

function nextImage() {
  imageIndex++;
  $image.setAttribute('src', images[imageIndex]);
  if (imageIndex === images.length) {
    imageIndex = 0;
  }
}

const $leftArrow = document.querySelector('.left-angle');
$leftArrow.addEventListener('click', previousImage => {
  imageIndex--;
  $image.setAttribute('src', images[imageIndex]);
});
