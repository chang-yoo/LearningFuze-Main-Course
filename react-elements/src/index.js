import React from 'react';
import * as ReactDOM from 'react-dom';

const element = React.createElement('h1', null, ['Hello, React!'])
console.log(element)
const container = document.querySelector('#root');
console.log(container);
const root = ReactDOM.createRoot(container);
root.render(element)
