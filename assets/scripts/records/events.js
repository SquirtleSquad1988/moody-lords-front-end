'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const cart = require('../cart');
const orderEvents = require('../orders/events');
const getFormFields = require('../../../lib/get-form-fields');

const onCreateRecord = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createRecord(data)
  .then((response) => {
    store.blog = response.blog;
    ui.onPostSuccess(response.blog);
  })
  .then(ui.onPostSuccess2(data))
  .catch(ui.onCreateError);
};

const onShowRecord = function (event) {
  event.preventDefault();
    api.showRecords()
    .then(ui.showRecords)
    .catch(ui.onShowError);
};

const addRecordToCart = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  cart.items.push(data.record);
};

const removeRecordFromCart = function (event) {
  event.preventDefault();
  // grabs the id number of record object
  let id = event.target.dataset.id;
  // returns the whole record object that matches
  // the id of the delete record button
  let delRecord = cart.items.find((record) => {
    if (record.id === id) {
      return record;
    }
  });
  // finds the index of the record object in the cart.items array
  let delRecordIndex = cart.items.indexOf(delRecord);
  // removes the record object at the proper index (determined by delRecordIndex)
  cart.items.splice(delRecordIndex, 1);
  orderEvents.onShowOrder();
};

const onDeleteRecord = function (event, id) {
  event.preventDefault();
  api.destroyRecord(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onUpdateRecord = function (event) {
  event.preventDefault();
  let info = getFormFields(event.target);
  api.updateRecord(+$(this).data('id'), info)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError);
};

const addHandlers = () => {
  $('.navbar').on('click', '#list-records', onShowRecord);
  $('.main-body').on('submit', '.add-record-cart', function(e) {
    e.preventDefault();
    let current = $(this).data('id');
    let id = event.target.dataset.id;
    let findRecord = cart.items.find((record) => {
      if (record.id === id) {
        return record;
      }
    });
    if (findRecord) {
      alertify.error("You already have this record in your cart");
    } else {
      $(".buy-record[data-id='" + current +"']").addClass('hidden');
      $(".remove-record[data-id='" + current +"']").removeClass('hidden');
      addRecordToCart(e);
    }
  });
  $('.main-body').on('click', '.remove-record', function(e) {
    e.preventDefault();
    let current = $(this).data('id');
    $(".remove-record[data-id='" + current +"']").addClass('hidden');
    $(".buy-record[data-id='" + current +"']").removeClass('hidden');
    removeRecordFromCart(e);
  });
  $('#shoppingCart').on('click', '.remove-record-cart', function(e) {
    e.preventDefault();
    let current = $(this).data('id');
    $(".remove-record[data-id='" + current +"']").addClass('hidden');
    $(".buy-record[data-id='" + current +"']").removeClass('hidden');
    removeRecordFromCart(e);
  });
};

module.exports = {
  onUpdateRecord,
  onCreateRecord,
  addHandlers,
  onShowRecord,
  onDeleteRecord,
  removeRecordFromCart
};
