/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local.storage');
console.log(previousTodosJSON);

if (previousTodosJSON !== null) {
  var todos = JSON.parse(previousTodosJSON);
};

window.addEventListener('beforeunload', function storage(event){
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
