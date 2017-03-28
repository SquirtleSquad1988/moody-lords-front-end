'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');

const onCreateBlog = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createBlog(data)
  .then((response) => {
    store.blog = response.blog;
    ui.onPostSuccess(response.blog);
  }).catch(ui.onCreateError);
};

const onShowBlog = function (event) {
  event.preventDefault();
    api.showBlogs()
    .then(ui.showBlogs)
    .catch(ui.onShowError);
};

const onShowBlogComments = function (event) {
  event.preventDefault();
    api.showBlogComments(+$(this).data('id'))
    .then(ui.onShowBlogComments)
    .catch(ui.onShowError);
};

const onDeleteBlog = function(event){
  event.preventDefault();
  api.destroyBlog(+$(this).data('id'))
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onUpdateBlog = function(event){
  event.preventDefault();
  let info = getFormFields(event.target);
  api.updateBlog(+$(this).data('id'), info)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError);
};

const addHandlers = () => {
  $('.navbar').on('click', '#blog-view', onShowBlog);
  $('.main-body').on('click', '.show-blog-comments', onShowBlogComments);
  // $('.main-body').on('submit', '#change-password', onChangePassword);
  // $('.navbar').on('click', '#exit', onSignOut);
};

module.exports = {
  onUpdateBlog,
  onCreateBlog,
  onShowBlog,
  onDeleteBlog,
  onShowBlogComments,
  addHandlers
};