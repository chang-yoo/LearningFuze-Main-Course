import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function RenderPokedex() {
  const listItems = pokedex.map(pokedex => <li key={pokedex.number}>{pokedex.name}</li>);
  return <ul>{listItems}</ul>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RenderPokedex pokedex={pokedex}/>);
