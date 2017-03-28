'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createComment = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/comments',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data,
  });
};

const showComments = function () {
  return $.ajax({
    url: config.apiOrigin + '/comments',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const showComment = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/comments/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const destroyComment = function(id){
  return $.ajax({
    url: config.apiOrigin + '/comments/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
  });
};

const updateComment = function(id, data) {
  return $.ajax({
    url: config.apiOrigin + '/comments/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
  },
  data
});
};

module.exports = {
  createComment,
  showComment,
  showComments,
  destroyComment,
  updateComment
};
