'use strict';

const showBlogsList = require('../templates/blog-templates/blog-listing.hbs');
const showBlogsListLogOut = require('../templates/blog-templates/blog-listing-log-out.hbs');
const renderEditBlogs = require('../templates/blog-templates/edit-blog.hbs');
const blogRedirectPage = require('../templates/blog-templates/blog-redirect.hbs');
const showCommentsTemplate = require('../templates/comment-listing.handlebars');

const showBlogs = function (data) {
  let showBlogsHtml = showBlogsList({ blogs: data.blogs });
  let showBlogsEditHtml = renderEditBlogs({ blogs: data.blogs });
  $('.main-body').empty();
  $('.main-body').append(showBlogsHtml);
  $('.main-body').append(showBlogsEditHtml);
  $('.hamburger').click();
  $(".hide-blog-comments").hide();
  $('.edit-blog-form').hide();
};

const showBlogsLogOut = function (data) {
  console.log('showBlogsLogOut Function');
  let showBlogsHtml = showBlogsListLogOut({ blogs: data.blogs });
  $('.main-body').empty();
  $('.main-body').append(showBlogsHtml);
  $('.hamburger').click();
  $(".hide-blog-comments").hide();
  $('.edit-blog-form').hide();
};

const showBlogsAfterPost = function (data) {
  let showBlogsHtml = showBlogsList({ blogs: data.blogs });
  let showBlogsEditHtml = renderEditBlogs({ blogs: data.blogs });
  $('.main-body').empty();
  $('.main-body').append(showBlogsHtml);
  $('.main-body').append(showBlogsEditHtml);
  $(".hide-blog-comments").hide();
  $('.edit-blog-form').hide();
};

const onShowBlogComments = function (data) {
  console.log(data);
  let showCommentsHtml = showCommentsTemplate({ comments: data.comments });
  let current = data.comments[0].blog_id;
  $(".display-comments[data-id='" + current +"']").empty();
  $(".display-comments[data-id='" + current +"']").append(showCommentsHtml);
  $(".show-blog-comments-log-out[data-id='" + current +"']").hide();
  $(".show-blog-comments[data-id='" + current +"']").hide();
  $(".hide-blog-comments[data-id='" + current +"']").show();
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
  $('.log').text('Blog Successfully Deleted');
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
  showBlogsAfterPost,
  showBlogsLogOut
};
