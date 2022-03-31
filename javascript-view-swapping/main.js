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
      } else {
        $tab[i].className = 'tab';
      }
    };

    var dataView = event.target.getAttribute('data-view');
    for (var q = 0; q < $view.length; q++){
    var $dataView = $view[q].getAttribute('data-view');
      if (dataView === $dataView){
      $view[q].className = 'view';
    } else {
      $view[q].className = 'view hidden';
    }
  }
});
