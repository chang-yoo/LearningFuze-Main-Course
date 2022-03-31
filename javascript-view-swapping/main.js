var $tabContainer = document.querySelector('.tab-container');
console.log($tabContainer);
var $tab = document.querySelectorAll('.tab');
console.log($tab);
var $view = document.querySelectorAll('.view');
console.log($view);


$tabContainer.addEventListener('click', function matches(event){
    for (var i = 0; i < $tab.length; i++ ){
      if ($tab[i] === event.target){
        $tab[i].className = 'tab active';
        $view[i].className = 'view'
      } else {
        $tab[i].className = 'tab';
        $view[i].className = 'view hidden';
      }
    };
  });
