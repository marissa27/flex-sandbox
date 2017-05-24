import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/App.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
