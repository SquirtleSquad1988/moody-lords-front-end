'use strict';

const showRecordsList = require('../templates/record-templates/shopping-cart.hbs');
const cart = require('../cart');

const showOrders = function (data, total) {
  if (cart.items.length === 0) {
    $('.cart-contents').empty();
    $('.cart-contents').text('You have no records queued for purchase!');
  } else {
    let showRecordsHtml = showRecordsList({ records: cart.items,  total: total });
    $('.cart-contents').html(showRecordsHtml);
  }
};

const clearCart = function () {
  let cartLength = cart.items.length;
  for (let i = 0; i < cartLength; i++) {
    cart.items.pop();
  }
  cart.items.pop();
  $('#shoppingCart').modal('hide');
};

const onCreateError = function () {
};

const onPatchSuccess = function () {
};

const onPostSuccess = function () {

};

const onPostSuccess2 = function () {
};

const onError = function () {
};

const onDeleteSuccess = function () {
};

const onUpdateSuccess = function () {

};



module.exports = {
  showOrders,
  onError,
  onPatchSuccess,
  onPostSuccess,
  onCreateError,
  onUpdateSuccess,
  onPostSuccess2,
  onDeleteSuccess,
  clearCart
};
