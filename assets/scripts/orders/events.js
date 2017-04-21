'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const cart = require('../cart');
const getFormFields = require('../../../lib/get-form-fields');

const onCreateOrder = function (event) {
  event.preventDefault();
  let data = {
    order: {
      records: JSON.stringify(cart.getItems()),
      complete: false
    }
  };
  if (cart.items.length === 0){
    alertify.error("The Cart Is Empty");
  } else {
    api.createOrder(data)
    .then((response) => {
      store.order = response.order;
      ui.onPostSuccess(response.order);
      console.log('Data sent to server: ', data);
    })
    .catch(ui.onCreateError);
  }
};

const onShowOrder = function () {
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
    onShowOrder();
  });
  $('#shoppingCart').on('click', '#create-order', onCreateOrder);
};

module.exports = {
  onUpdateOrder,
  onCreateOrder,
  onShowOrder,
  onDeleteOrder,
  addHandlers
};
