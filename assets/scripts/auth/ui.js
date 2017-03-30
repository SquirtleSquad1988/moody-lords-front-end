'use strict';

const store = require('../store');
const showHeader = require('../templates/page-header.hbs');

const signInSuccess = () => {
  $('.sign-in-dropdown').hide();
  $('.sign-up-dropdown').hide();
  $('#exit').show();
  $('.change-password-dropdown').show();
  $('.main-body').empty();
  $('.main-body').append(showHeader);
  $('input').val('');
  $('#blog-view').show();
  $('#blog-view-log-out').hide();
  $('#create-blog').show();
};

const signInFailure = () => {

};

const signUpSuccess = () => {
  $('.main-body').empty();
  $('.main-body').append(showHeader);
  $('input').val('');
};

const signUpFailure = () => {
};

const changePasswordSuccess = () => {
  $('.main-body').empty();
  $('.main-body').append(showHeader);
  $('input').val('');
};

const passwordChangeFailure = () => {
};

const signOutSuccess = () => {
  $('.main-body').empty();
  $('.main-body').append(showHeader);
  $('.change-password-dropdown').hide();
  $('#exit').hide();
  $('.sign-in-dropdown').show();
  $('.sign-up-dropdown').show();
  $('.hamburger').click();
  $('#blog-view').hide();
  $('#blog-view-log-out').show();
  $('#create-blog').hide();
  localStorage.removeItem('user');
  store.user = null;
};

module.exports = {
  changePasswordSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  passwordChangeFailure,
  signOutSuccess,
  signUpSuccess,
};
