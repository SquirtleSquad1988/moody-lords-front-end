'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const showNavbar = require('./templates/navbar.handlebars');
const showSidebar = require('./templates/sidebar.handlebars');
const handlers = require('./auth/events');

$(() => {
  setAPIOrigin(location, config);
  // $('.navbar-render').append(showSidebar);
  $('#change-password-dropdown').hide();
  $('#exit').hide();
});


$(document).ready(handlers.addHandlers);

$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {
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
