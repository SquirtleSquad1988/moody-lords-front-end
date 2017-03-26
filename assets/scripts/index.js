'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const showNavbar = require('./templates/navbar.handlebars');
const handlers = require('./auth/events');

$(() => {
  setAPIOrigin(location, config);
  $('.navbar-render').append(showNavbar);
  $('#change-password-dropdown').hide();
  $('#exit').hide();
});


$(document).ready(handlers.addHandlers);
