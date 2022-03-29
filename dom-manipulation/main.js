var click = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');


function temperature() {
  if (click < 4) {
    return 'hot-button.cold'
  } else if (click < 7) {
    return 'hot-button.cool'
  } else if (click < 10) {
    return 'hot-button.tepid'
  } else if (click < 13) {
    return 'hot-button.warm'
  } else if (click < 16) {
    return 'hot-button.hot'
  } else {
    return 'hot-button.nuclear'
  }
};

$hotButton.addEventListener('click', function(){
  click++;
  $clickCount.textContent = 'Clicks: ' + click;
});
