'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const showSignUp = require('./templates/sign-up.hbs');
const showSignIn = require('./templates/sign-in.hbs');
const showChangePw = require('./templates/change-pw.hbs');
const handlers = require('./auth/events');
const blogHandlers = require('./blogs/events');
const showHeader = require('./templates/page-header.hbs');

const clearPage = function () {
  $('.main-body').empty();
  $('.hamburger').click();
};

$(() => {
  setAPIOrigin(location, config);
  $('.main-body').append(showHeader);
  $('.change-password-dropdown').hide();
  $('#exit').hide();

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
});

$(document).ready(handlers.addHandlers);
$(document).ready(blogHandlers.addHandlers);
