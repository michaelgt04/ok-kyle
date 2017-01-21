import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './swipe/App';
import UserProfile from './profile/UserProfile'

$(function() {
    if (document.getElementById('app')){
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  }
});

$(function() {
  if (document.getElementById('user-profile')){
    ReactDOM.render(
      <UserProfile />,
      document.getElementById('user-profile')
    );
  }
});
