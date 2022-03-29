var click = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');


function temperature() {
  if (click < 4) {
    return 'cold'
  } else if (click < 7) {
    return 'cool'
  } else if (click < 10) {
    return 'tepid'
  } else if (click < 13) {
    return 'warm'
  } else if (click < 16) {
    return 'hot'
  } else {
    return 'nuclear'
  }
};

$hotButton.addEventListener('click', function(){
  click++;
  $clickCount.textContent = 'Clicks: ' + click;
  $hotButton.className = 'hot-button ' + temperature()
});
