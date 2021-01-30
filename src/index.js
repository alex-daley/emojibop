import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import emojis from './emojis';

ReactDOM.render(
  <React.StrictMode>
    <App emojis={emojis}/>
  </React.StrictMode>,
  document.getElementById('root')
);
