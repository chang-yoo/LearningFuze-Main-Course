import React from 'react';
import ReactDOM from 'react-dom/client';
import { Accordion, languages } from './accordion';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Accordion languages={languages}/>);
