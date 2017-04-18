'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createRecord = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/records',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data,
  });
};

const showRecords = function () {
  return $.ajax({
    url: config.apiOrigin + '/records',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const showRecord = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/records/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const destroyRecord = function(id){
  return $.ajax({
    url: config.apiOrigin + '/records/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
  });
};

const updateRecord = function(id, data) {
  return $.ajax({
    url: config.apiOrigin + '/records/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
  },
  data
});
};

module.exports = {
  createRecord,
  showRecord,
  showRecords,
  destroyRecord,
  updateRecord
};
