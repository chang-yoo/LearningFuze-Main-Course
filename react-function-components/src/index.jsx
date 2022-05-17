import React from 'react';
import * as ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click Me! {props.name}</button>;
}

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
const button = <CustomButton name='User'/>;
root.render(button);
