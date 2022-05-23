fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error', error));

fetch('https://pokeapi.co/api/v2/pokemon/snorlax')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error', error));
