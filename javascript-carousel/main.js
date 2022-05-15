const images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/039.png', 'images/025.png'];
const $image = document.querySelector('.images');
let imageIndex = 0;

const $rightArrow = document.querySelector('.right-angle');

$rightArrow.addEventListener('click', nextImage);

function nextImage() {
  imageIndex++;
  if (imageIndex === images.length) {
    imageIndex = 0;
  }
  changeDots();
  $image.setAttribute('src', images[imageIndex]);
}

const $leftArrow = document.querySelector('.left-angle');
$leftArrow.addEventListener('click', previousImage => {
  imageIndex--;
  if (imageIndex === -1) {
    imageIndex = images.length - 1;
  }
  changeDots();
  $image.setAttribute('src', images[imageIndex]);
});

function carousel() {
  imageIndex++;
  if (imageIndex === images.length) {
    imageIndex = 0;
  }
  changeDots();
  $image.setAttribute('src', images[imageIndex]);
}

const $dots = document.querySelectorAll('.horz-margin');
function changeDots() {
  for (let i = 0; i < $dots.length; i++) {
    $dots[i].className = 'far fa-circle horz-margin';
    if (parseInt($dots[i].getAttribute('id')) === imageIndex) {
      $dots[i].className = 'fas fa-circle horz-margin';
    }
  }
}
setInterval(carousel, 3000);
