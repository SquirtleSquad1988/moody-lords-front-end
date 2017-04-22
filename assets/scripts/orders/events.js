'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const cart = require('../cart');
const orderComplete = require('../orderdone');
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
  } else if (orderComplete.getId() === '') {
    api.createOrder(data)
    .then((data) => {
      orderComplete.setId(data.order.id);
      console.log(JSON.parse(data.order.records));
    })
    .catch(ui.onCreateError);
  } else {
    api.updateOrder(orderComplete.getId(), data)
    .then((data) => {
      console.log(JSON.parse(data.order.records));
      ui.showOrders();
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