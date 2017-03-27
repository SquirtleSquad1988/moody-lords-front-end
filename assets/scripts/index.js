'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const showNavbar = require('./templates/navbar.handlebars');
const showSidebar = require('./templates/sidebar.handlebars');
const showSignUp = require('./templates/sign-up.hbs');
const showSignIn = require('./templates/sign-in.hbs');
const showChangePw = require('./templates/change-pw.hbs');
const handlers = require('./auth/events');

$(() => {
  setAPIOrigin(location, config);
  // $('.navbar-render').append(showSidebar);
  $('#change-password-dropdown').hide();
  $('#exit').hide();
  $('.sign-up-dropdown').on('click', function () {
    $('.main-body').empty();
    $('.hamburger').click();
    $('.main-body').append(showSignUp);
  });
  $('.sign-in-dropdown').on('click', function () {
    $('.main-body').empty();
    $('.hamburger').click();
    $('.main-body').append(showSignIn);
  });
  $('.change-password-dropdown').on('click', function () {
    $('.main-body').empty();
    $('.hamburger').click();
    $('.main-body').append(showChangePw);
  });
});


$(document).ready(handlers.addHandlers);

$(document).ready(function () {
  let trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;
    trigger.click(function () {
      hamburger_cross();
    });
    function hamburger_cross() {
      if (isClosed === true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
});
