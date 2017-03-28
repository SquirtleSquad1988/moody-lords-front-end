'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');

const onCreateComment = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createComment(data)
  .then((response) => {
    store.blog = response.blog;
    ui.onPostSuccess(response.blog);
  }).catch(ui.onCreateError);
};

const onShowComment = function (event) {
  event.preventDefault();
    api.showComments()
    .then(ui.showComments)
    .catch(ui.onShowError);
};

const onDeleteComment = function(event){
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.
  api.destroyComment(+$(this).data('id'))
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onUpdateComment = function(event){
  event.preventDefault();
  let info = getFormFields(event.target);
  console.log(+$(this).data('id'));
  api.updateComment(+$(this).data('id'), info)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError);

};

module.exports = {
  onUpdateComment,
  onCreateComment,
  onShowComment,
  onDeleteComment,
};
