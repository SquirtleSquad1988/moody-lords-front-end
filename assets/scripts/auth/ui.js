'use strict';

const signInSuccess = () => {
  $('#sign-in-dropdown').hide();
  $('#sign-up-dropdown').hide();
  $('#exit').show();
  $('#change-password-dropdown').show();
  $('.sign-in-modal').modal('hide');
  $('input').val('');

};

const signInFailure = () => {

};

const signUpSuccess = () => {
  $('.sign-up-modal').modal('hide');
  $('input').val('');
};

const signUpFailure = () => {
};

const changePasswordSuccess = () => {
  $('.change-password-modal').modal('hide');
  $('input').val('');

};

const passwordChangeFailure = () => {
};

const signOutSuccess = () => {
  $('#change-password-dropdown').hide();
  $('#exit').hide();
  $('#sign-in-dropdown').show();
  $('#sign-up-dropdown').show();
  $('.blog-render-signed-in').empty();
  $('.page-render').empty();
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
