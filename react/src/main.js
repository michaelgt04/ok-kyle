import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './swipe/App';
import UserProfile from './profile/UserProfile'
import AdminProfile from './admin/AdminProfile'

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

$(function() {
  if (document.getElementById('admin-profile')){
    ReactDOM.render(
      <AdminProfile />,
      document.getElementById('admin-profile')
    );
  }
});
