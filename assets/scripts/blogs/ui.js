'use strict';

const showBlogsList = require('../templates/blog-templates/blog-listing.hbs');
const showBlogsListLogOut = require('../templates/blog-templates/blog-listing-log-out.hbs');
const renderEditBlogs = require('../templates/blog-templates/edit-blog.hbs');
const blogRedirectPage = require('../templates/blog-templates/blog-redirect.hbs');
const showCommentsTemplate = require('../templates/comment-listing.handlebars');

const showBlogs = function (data) {
  if (data.blogs.length === 0) {
    alertify.error("There Are No Blogs");
  } else {
    for (let i = 0; i < data.blogs.length; i++) {
      let content = data.blogs[i].updated_at;
      data.blogs[i].updated_at = content.split('T')[0];
    }
    let showBlogsHtml = showBlogsList({ blogs: data.blogs });
    let showBlogsEditHtml = renderEditBlogs({ blogs: data.blogs });
    $('.main-body').empty();
    $('.main-body').append(showBlogsHtml);
    $('.main-body').append(showBlogsEditHtml);
    $('.hamburger').click();
    $(".hide-blog-comments").hide();
    $('.edit-blog-form').hide();
  }

};

const showBlogsLogOut = function (data) {
  if (data.blogs.length === 0) {
    alertify.error("There Are No Blogs");
  } else {
    for (let i = 0; i < data.blogs.length; i++) {
      let content = data.blogs[i].updated_at;
      data.blogs[i].updated_at = content.split('T')[0];
    }
    let showBlogsHtml = showBlogsListLogOut({ blogs: data.blogs });
    $('.main-body').empty();
    $('.main-body').append(showBlogsHtml);
    $('.hamburger').click();
    $(".hide-blog-comments").hide();
    $('.edit-blog-form').hide();
  }
};

const showBlogsAfterPost = function (data) {
  if (data.blogs.length === 0) {
    alertify.error("There Are No Blogs");
  } else {
    for (let i = 0; i < data.blogs.length; i++) {
      let content = data.blogs[i].updated_at;
      data.blogs[i].updated_at = content.split('T')[0];
    }
    let showBlogsHtml = showBlogsList({ blogs: data.blogs });
    let showBlogsEditHtml = renderEditBlogs({ blogs: data.blogs });
    $('.main-body').empty();
    $('.main-body').append(showBlogsHtml);
    $('.main-body').append(showBlogsEditHtml);
    $(".hide-blog-comments").hide();
    $('.edit-blog-form').hide();
  }
};

const onShowBlogComments = function (data) {
  for (let i = 0; i < data.comments.length; i++) {
    let content = data.comments[i].updated_at;
    data.comments[i].updated_at = content.split('T')[0];
  }
  let showCommentsHtml = showCommentsTemplate({ comments: data.comments });
  let current = data.comments[0].blog_id;
  $(".display-comments[data-id='" + current +"']").empty();
  $(".display-comments[data-id='" + current +"']").append(showCommentsHtml);
  $(".show-blog-comments-log-out[data-id='" + current +"']").hide();
  $(".show-blog-comments[data-id='" + current +"']").hide();
  $(".hide-blog-comments[data-id='" + current +"']").show();

};

const onShowError = function () {
  alertify.error("This blog has no comments");
};

const onPostSuccess = function () {
  $('.main-body').empty();
  $('input').val('');
  $('textarea').val('');
  $('.main-body').append(blogRedirectPage);
  alertify.success('Blog Successfully Created!');
};

const onError = function () {
  alertify.error("Something Went Wrong");
};

const onUpdateSuccess = function () {
  $('.main-body').empty();
  $('input').val('');
  $('textarea').val('');
  $('.main-body').append(blogRedirectPage);
  alertify.success('Blog Successfully Edited!');
};

const onDeleteSuccess = function () {
  alertify.success("Blog Successfully Deleted");
};

const onCreateError = function() {
  alertify.error("Something Went Wrong");
};



module.exports = {
  showBlogs,
  onError,
  onPostSuccess,
  onShowError,
  onUpdateSuccess,
  onShowBlogComments,
  onDeleteSuccess,
  onCreateError,
  showBlogsAfterPost,
  showBlogsLogOut,
};
