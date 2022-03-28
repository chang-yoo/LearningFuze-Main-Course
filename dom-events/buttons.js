function handleClick(event){
  console.log('button clicked');
  console.log('event:', event);
  console.log('target.event', event.target);
}

var $clickButton = document.querySelector('.click-button');

$clickButton.addEventListener('click', handleClick);

function handleMouseOver(event){
  console.log('button hovered')
  console.log('event', event)
  console.log('event.tareget', event.taget)
}

var $handleMouseOver = document.querySelector('.hover-button')

$handleMouseOver.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event){
  console.log('button double-clicked')
  console.log('event', event)
  console.log('event.target', event.target)
}

var $handleDoubleClick = document.querySelector('.double-click-button')

$handleDoubleClick.addEventListener('dblclick', handleDoubleClick);
