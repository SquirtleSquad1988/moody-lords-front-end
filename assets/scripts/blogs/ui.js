'use strict';

const showBlogsList = require('../templates/blog-listing.hbs');
const showCommentsTemplate = require('../templates/comment-listing.handlebars');

const showBlogs = function (data) {
  // selects the content element and appends new HTML into i
  // showBooksHTML is a string of HTML that is made up
  // of the template showBooksTemplate and the data.blogs objects
  // let showCommentsHtml = showCommentsTemplate({ comments: data.comments });
  let showBlogsHtml = showBlogsList({ blogs: data.blogs });
  // selects the content element and appends new HTML into it
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
  // $(".hide-blog-comments").hide();

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
  $('.create-blog-modal').modal('hide');
  $('.log').text('Successfully Created Blog');
  $('.credential-status').empty();
  $('input').val('');
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
 $('.credential-status').text('Please Try Again: Parameters must contain at least 1 character');
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
};
