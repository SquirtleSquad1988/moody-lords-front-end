'use strict';

const showHeader = require('../templates/page-header.hbs');

const signInSuccess = () => {
  $('.sign-in-dropdown').hide();
  $('.sign-up-dropdown').hide();
  $('#exit').show();
  $('.change-password-dropdown').show();
  $('.main-body').empty();
  $('.main-body').append(showHeader);
  $('input').val('');

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
  $('.change-password-dropdown').hide();
  $('#exit').hide();
  $('.sign-in-dropdown').show();
  $('.sign-up-dropdown').show();
  $('.hamburger').click();
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
