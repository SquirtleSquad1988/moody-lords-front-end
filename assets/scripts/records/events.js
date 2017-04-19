'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const cart = require('../cart');
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
  let data = getFormFields(event.target);
  cart.items.push(data.record);
  console.log(data.record);
};

const onDeleteRecord = function(event){
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.
  api.destroyRecord(+$(this).data('id'))
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onUpdateRecord = function(event){
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
    $(".buy-record[data-id='" + current +"']").addClass('hidden');
    $(".remove-record[data-id='" + current +"']").removeClass('hidden');
    addRecordToCart(e);
    console.log(cart.getItems());
  });
  $('.main-body').on('click', '.remove-record', function(e) {
    e.preventDefault();
    let current = $(this).data('id');
    $(".remove-record[data-id='" + current +"']").addClass('hidden');
    $(".buy-record[data-id='" + current +"']").removeClass('hidden');
  });
};

module.exports = {
  onUpdateRecord,
  onCreateRecord,
  onShowRecord,
  onDeleteRecord,
  addHandlers
};
