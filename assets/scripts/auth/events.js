'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .then((response) => {
      // sets the local storage key "user" to the object response.user
      // which contains the user token
      localStorage.setItem("user", JSON.stringify(response.user));
      store.user = response.user;
      return store.user;
    })
    .then(ui.signInSuccess)
    .catch(ui.signInFailure);
};

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  if (data.credentials.password === data.credentials.password_confirmation) {
    api.signUp(data)

    .then(()=> {
      onSignIn(event, data);
    })
  .then(ui.signUpSuccess)
  .catch(ui.signUpFailure);
  }
};


const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.passwordChange(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.passwordChangeFailure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
    ;
};

const addHandlers = () => {
  $('.main-body').on('submit', '#sign-up', onSignUp);
  $('.main-body').on('submit', '#sign-in', onSignIn);
  $('.main-body').on('submit', '#change-password', onChangePassword);
  $('.navbar').on('click', '#exit', onSignOut);
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
};

module.exports = {
  addHandlers,
};
