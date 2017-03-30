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
  })
  .then(ui.onPostSuccess2(data))
  .catch(ui.onCreateError);
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



const addHandlers = () => {
  $('.main-body').on('submit', '.edit-blog-form', onCreateComment);
  $('.main-body').on('click', '.del-comment', onDeleteComment);
  $(".main-body").on("click", ".del-comment", function (e) {
    e.preventDefault();
    let current = ($(this).data('blogid'));
    // $("#blog-comment[data-id='" + current +"']").fadeOut().remove();
    $(".display-comments[data-id='" + current +"']").empty();
    $(".display-comments[data-id='" + current +"']").text('Comment Successfully Deleted');
    $(".show-blog-comments[data-id='" + current +"']").show();
    $(".hide-blog-comments[data-id='" + current +"']").hide();

  });
  // $(".main-body").on("click", ".del-comment", function (e) {
  //   e.preventDefault();
  //   let current = ($(this).data('blogid')).toString();
  // });
};



module.exports = {
  onUpdateComment,
  onCreateComment,
  onShowComment,
  onDeleteComment,
  addHandlers
};
