import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Koodit from './Koodit'


import registerServiceWorker from './registerServiceWorker';


const KOODIT = Koodit();

ReactDOM.render(<App koodit={ KOODIT } />, document.getElementById('root'));


registerServiceWorker();
