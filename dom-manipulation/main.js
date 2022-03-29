var number = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

console.log(number);

$hotButton.addEventListener('click', increment)

function increment(event){
   number++;
};

$clickCount.textContent = 'Clicks: ' + number
