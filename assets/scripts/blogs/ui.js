'use strict';

const showBlogsList = require('../templates/blog-templates/blog-listing.hbs');
const renderEditBlogs = require('../templates/blog-templates/edit-blog.hbs');
const blogRedirectPage = require('../templates/blog-templates/blog-redirect.hbs');
const showCommentsTemplate = require('../templates/comment-listing.handlebars');
const showHeader = require('../templates/page-header.hbs');

const showBlogs = function (data) {
  let showBlogsHtml = showBlogsList({ blogs: data.blogs });
  let showBlogsEditHtml = renderEditBlogs({ blogs: data.blogs });
  $('.main-body').empty();
  $('.main-body').append(showBlogsHtml);
  $('.main-body').append(showBlogsEditHtml);
  $('.hamburger').click();
  $(".main-body").on("click", ".edit-blog", function (e) {
    e.preventDefault();
    let current = $(this).data('id');
    $('.blog-item').addClass('hidden');
    $("#blog-edit-form[data-id='" + current +"']").removeClass('hidden');
    });
  $(".main-body").on("click", ".del-blog", function (e) {
    e.preventDefault();
    let current = $(this).data('id');
    $(".blog-item[data-id='" + current +"']").fadeOut();
    });
  $(".hide-blog-comments").hide();
  $(".show-hide-comments").on("click", ".hide-blog-comments", function () {
    console.log('hi');
    let current = $(this).data('id');
    $(".display-comments[data-id='" + current +"']").empty();
    $(".hide-blog-comments[data-id='" + current +"']").hide();
    $(".show-blog-comments[data-id='" + current +"']").show();
  });
};

const showBlogsAfterPost = function (data) {
  let showBlogsHtml = showBlogsList({ blogs: data.blogs });
  let showBlogsEditHtml = renderEditBlogs({ blogs: data.blogs });
  $('.main-body').empty();
  $('.main-body').append(showBlogsHtml);
  $('.main-body').append(showBlogsEditHtml);
  $(".main-body").on("click", ".edit-blog", function (e) {
    e.preventDefault();
    let current = $(this).data('id');
    $('.blog-item').addClass('hidden');
    $("#blog-edit-form[data-id='" + current +"']").removeClass('hidden');
    });
  $(".main-body").on("click", ".del-blog", function (e) {
    e.preventDefault();
    let current = $(this).data('id');
    $(".blog-item[data-id='" + current +"']").fadeOut();
    });
  $(".hide-blog-comments").hide();
  $(".show-hide-comments").on("click", ".hide-blog-comments", function () {
    console.log('hi');
    let current = $(this).data('id');
    $(".display-comments[data-id='" + current +"']").empty();
    $(".hide-blog-comments[data-id='" + current +"']").hide();
    $(".show-blog-comments[data-id='" + current +"']").show();
  });
};

const onShowBlogComments = function (data) {
  console.log(data);
  let showCommentsHtml = showCommentsTemplate({ comments: data.comments });
  let current = data.comments[0].blog_id;
  $("#comments-tab-reference[data-id='" + current +"']").empty();
  $("#comments-tab-reference[data-id='" + current +"']").append(showCommentsHtml);
  $(".comments-tab[data-id='" + current +"']").hide();
  // $(".show-blog-comments[data-id='" + current +"']").hide();
  // $(".hide-blog-comments[data-id='" + current +"']").show();
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
  showBlogsAfterPost
};
