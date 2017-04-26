'use strict';

const store = require('../store');
const showHeader = require('../templates/page-header.hbs');

const homepageRender = () => {
  $('.main-body').empty();
  $('.main-body').append(showHeader);
};

const signInSuccess = () => {
  $('.sign-in-dropdown').hide();
  $('.sign-up-dropdown').hide();
  $('#exit').show();
  $('.change-password-dropdown').show();
  homepageRender();
  $('input').val('');
  $('#blog-view').show();
  $('#list-records').show();
  $('#blog-view-log-out').hide();
  $('#create-blog').show();
  alertify.success("Successfully Signed In");
};

const signInFailure = () => {
  alertify.error("Something Went Wrong");
};

const signUpSuccess = () => {
  homepageRender();
  $('input').val('');
  alertify.success("Successfully Signed Up");
};

const signUpFailure = () => {
  alertify.error("Something Went Wrong");
};

const changePasswordSuccess = () => {
  homepageRender();
  $('input').val('');
  alertify.success("Password Successfully Changed");
};

const passwordChangeFailure = () => {
  alertify.error("Something Went Wrong");
};

const signOutSuccess = () => {
  homepageRender();
  $('#list-records').hide();
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
  alertify.success("Successfully Signed Out");
};

module.exports = {
  changePasswordSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  passwordChangeFailure,
  signOutSuccess,
  signUpSuccess,
  homepageRender
};
