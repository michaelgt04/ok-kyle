import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '.swipe/App'

$(function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
