'use strict';

const showBlogsList = require('../templates/blog-templates/blog-listing.hbs');
const renderEditBlogs = require('../templates/blog-templates/edit-blog.hbs');
const blogRedirectPage = require('../templates/blog-templates/blog-redirect.hbs');
const showCommentsTemplate = require('../templates/comment-listing.handlebars');
const store = require('../store');
const showHeader = require('../templates/page-header.hbs');

const showBlogs = function (data) {
  let showBlogsHtml = showBlogsList({ blogs: data.blogs });
  let showBlogsEditHtml = renderEditBlogs({ blogs: data.blogs });
  $('.main-body').empty();
  $('.main-body').append(showBlogsHtml);
  $('.main-body').append(showBlogsEditHtml);
  $('.hamburger').click();
  $(".hide-blog-comments").hide();
  $('.edit-blog-form').hide();
  if (!store.user.admin) {
    $('.admin').hide();
  }
};

const showBlogsAfterPost = function (data) {
  let showBlogsHtml = showBlogsList({ blogs: data.blogs });
  let showBlogsEditHtml = renderEditBlogs({ blogs: data.blogs });
  $('.main-body').empty();
  $('.main-body').append(showBlogsHtml);
  $('.main-body').append(showBlogsEditHtml);
  $(".hide-blog-comments").hide();
  $('.edit-blog-form').hide();
  if (!store.user.admin) {
    $('.admin').hide();
  }
};

const onShowBlogComments = function (data) {
  console.log(data);
  let showCommentsHtml = showCommentsTemplate({ comments: data.comments });
  let current = data.comments[0].blog_id;
  $(".display-comments[data-id='" + current +"']").empty();
  $(".display-comments[data-id='" + current +"']").append(showCommentsHtml);
  $(".show-blog-comments[data-id='" + current +"']").hide();
  $(".hide-blog-comments[data-id='" + current +"']").show();
  if (!store.user.admin) {
    $('.admin').hide();
  }
};

const showBlog = function () {
};

const showSuccess = function () {

};

const onShowError = function () {
  $('.log').text('This blog has no comments');
};

const onPostSuccess = function () {
  $('.main-body').empty();
  $('input').val('');
  $('textarea').val('');
  $('.main-body').append(blogRedirectPage);
};

const onError = function () {
  $('.log').text('Parameters must be at least 1 character');
};

const onUpdateSuccess = function () {
  $('.main-body').empty();
  $('input').val('');
  $('textarea').val('');
  $('.main-body').append(blogRedirectPage);
};

const onDeleteSuccess = function () {
};

const onCreateError = function() {

};



module.exports = {
  showBlog,
  showBlogs,
  onError,
  onPostSuccess,
  showSuccess,
  onShowError,
  onUpdateSuccess,
  onShowBlogComments,
  onDeleteSuccess,
  onCreateError,
  showBlogsAfterPost
};
