'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const showSignUp = require('./templates/auth-templates/sign-up.hbs');
const showSignIn = require('./templates/auth-templates/sign-in.hbs');
const showChangePw = require('./templates/auth-templates/change-pw.hbs');
const handlers = require('./auth/events');
const blogHandlers = require('./blogs/events');
const commentHandlers = require('./comments/events');
const showHeader = require('./templates/page-header.hbs');
const showCreateBlog = require('./templates/blog-templates/create-blog.hbs');
const store = require('./store');

const clearPage = function () {
  $('.main-body').empty();
  $('.hamburger').click();
};

// if (store.user) {
//
// }

$(() => {
  // sets the store.user parameter to the key 'user' in local storage

  store.user = JSON.parse(localStorage.getItem('user'));
  setAPIOrigin(location, config);

  $('.main-body').append(showHeader);
  if (store.user) {
    $('#blog-view-log-out').hide();
    $('.sign-up-dropdown').hide();
    $('.sign-in-dropdown').hide();
  } else {
    $('#blog-view').hide();
    $('#create-blog').hide();
    $('.change-password-dropdown').hide();
    $('#exit').hide();
  }
  $('.sign-up-dropdown').on('click', function () {
    clearPage();
    $('.main-body').append(showSignUp);
  });
  $('.sign-in-dropdown').on('click', function () {
    clearPage();
    $('.main-body').append(showSignIn);
  });
  $('.change-password-dropdown').on('click', function () {
    clearPage();
    $('.main-body').append(showChangePw);
  });
  $('.homepage-direct').on('click', function () {
    clearPage();
    $('.main-body').append(showHeader);
  });
  $('#create-blog').on('click', function () {
    clearPage();
    $('.main-body').append(showCreateBlog);
  });
});

$(document).ready(handlers.addHandlers);
$(document).ready(blogHandlers.addHandlers);
$(document).ready(commentHandlers.addHandlers);
