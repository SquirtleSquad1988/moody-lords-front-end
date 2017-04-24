'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const cart = require('../cart');
const stripe = require('../charges/events')
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
  } else if (cart.items.length > 0 && orderComplete.getId() === '') {
    api.createOrder(data)
    .then((data) => {
      orderComplete.setId(data.order.id);
      stripe.onCreateCharge(event, data.order);
      console.log(JSON.parse(data.order.records));
    })
    .catch(ui.onCreateError);
  } else {
    api.updateOrder(orderComplete.getId(), data)
    .then((data) => {
      console.log(JSON.parse(data.order.records));
      let total = cart.getTotal();
      ui.showOrders(data, total);
      stripe.onCreateCharge(event, data.order);
    })
    .catch(ui.onCreateError);
  }
};

const onShowOrder = function () {
  let total = cart.getTotal();
  ui.showOrders(cart.items, total);
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
    console.log(cart.getTotal());
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
