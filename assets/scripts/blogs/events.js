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

const onShowBlogAfterPost = function (event) {
  event.preventDefault();
    api.showBlogs()
    .then(ui.showBlogsAfterPost)
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
  $('.main-body').on('click', '#blogs-redirect', onShowBlogAfterPost);
  $('.main-body').on('click', '.del-blog', onDeleteBlog);
  $('.main-body').on('submit', '#blog-edit-form', onUpdateBlog);
  $('.navbar').on('click', '#blog-view', onShowBlog);
  $('.main-body').on('submit', '#blog-create-form', onCreateBlog);
  $('.main-body').on('click', '.show-blog-comments', onShowBlogComments);
  // Edit Blog Button
  $(".main-body").on("click", ".edit-blog", function (e) {
    e.preventDefault();
    let current = $(this).data('id');
    $('.blog-item').addClass('hidden');
    $("#blog-edit-form[data-id='" + current +"']").removeClass('hidden');
    });
  // Delete blog button
  $(".main-body").on("click", ".del-blog", function (e) {
    e.preventDefault();
    let current = $(this).data('id');
    $(".blog-item[data-id='" + current +"']").fadeOut();
  });
  // Create Comment Button
  $(".main-body").on("click", ".create-comment", function (e) {
    console.log('hi');
    e.preventDefault();
    let current = $(this).data('id');
    $(".edit-blog-form[data-id='" + current +"']").slideToggle();
  });
  // Show/Hide Button
  $(".show-hide-comments").on("click", ".hide-blog-comments", function () {
    console.log('hi');
    let current = $(this).data('id');
    $(".display-comments[data-id='" + current +"']").empty();
    $(".hide-blog-comments[data-id='" + current +"']").hide();
    $(".show-blog-comments[data-id='" + current +"']").show();
  });
};

module.exports = {
  onUpdateBlog,
  onCreateBlog,
  onShowBlog,
  onDeleteBlog,
  onShowBlogComments,
  addHandlers
};
