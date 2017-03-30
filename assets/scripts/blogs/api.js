'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createBlog = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/blogs',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data,
  });
};

const showBlogs = function () {
  return $.ajax({
    url: config.apiOrigin + '/blogs',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const showBlog = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/blogs/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const showBlogsLogOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/blogs',
    method: 'GET',
  });
};

const showBlogCommentsLogOut = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/blogs/' + id + '/comments/',
    method: 'GET',
  });
};

const showBlogComments = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/blogs/' + id + '/comments/',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const destroyBlog = function(id){
  return $.ajax({
    url: config.apiOrigin + '/blogs/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
  });
};

const updateBlog = function(id, data) {
  return $.ajax({
    url: config.apiOrigin + '/blogs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
  },
  data
});
};

module.exports = {
  createBlog,
  showBlog,
  showBlogs,
  destroyBlog,
  updateBlog,
  showBlogComments,
  showBlogsLogOut,
  showBlogCommentsLogOut
};
