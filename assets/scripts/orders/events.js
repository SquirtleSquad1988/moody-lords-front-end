'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const cart = require('../cart');
const getFormFields = require('../../../lib/get-form-fields');

const onCreateOrder = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createOrder(data)
  .then((response) => {
    store.blog = response.blog;
    ui.onPostSuccess(response.blog);
  })
  .then(ui.onPostSuccess2(data))
  .catch(ui.onCreateError);
};

const onShowOrder = function (event) {
  ui.showOrders();
};


const onDeleteOrder = function(event){
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.
  api.destroyOrder(+$(this).data('id'))
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onUpdateOrder = function(event){
  event.preventDefault();
  let info = getFormFields(event.target);
  api.updateOrder(+$(this).data('id'), info)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError);
};

const addHandlers = () => {
  $('body').on('click', '#cart-button', function(e) {
    e.preventDefault();
    let current = $(this).data('id');
    onShowOrder();
  });
};

module.exports = {
  onUpdateOrder,
  onCreateOrder,
  onShowOrder,
  onDeleteOrder,
  addHandlers
};
