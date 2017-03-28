'use strict';

const showBlogsList = require('../templates/blog-templates/blog-listing.hbs');
const showCommentsTemplate = require('../templates/comment-listing.handlebars');
const showHeader = require('../templates/page-header.hbs');

const showBlogs = function (data) {
  let showBlogsHtml = showBlogsList({ blogs: data.blogs });
  $('.main-body').empty();
  $('.main-body').append(showBlogsHtml);
  $('.hamburger').click();
  // the function below deletes the blog item from the rendered list and
  // only that item. Have to alter DOM traversal if structure of blog-item
  // is altered
  // $("#content").on("click", ".del-blog", function (e) {
  //   e.preventDefault();
  //   let blogDescription = $(e.target).parent().parent();
  //   blogDescription.fadeOut();
  //   });
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
  $('.main-body').empty();
  $('.main-body').append(showBlogsHtml);
  // the function below deletes the blog item from the rendered list and
  // only that item. Have to alter DOM traversal if structure of blog-item
  // is altered
  // $("#content").on("click", ".del-blog", function (e) {
  //   e.preventDefault();
  //   let blogDescription = $(e.target).parent().parent();
  //   blogDescription.fadeOut();
  //   });
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
  $(".display-comments[data-id='" + current +"']").empty();
  $(".display-comments[data-id='" + current +"']").append(showCommentsHtml);
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
  $(".show-all-blogs").click();
  $('.main-body').empty();
  $('.main-body').append(showBlogsList);
  $('input').val('');
  $('input').val('');
  $('textarea').val('');
};

const onError = function () {
  $('.log').text('Parameters must be at least 1 character');
};

const onUpdateSuccess = function () {
  $(".show-all-blogs").click();
  $('.log').text('Blog Successfully Updated');
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
