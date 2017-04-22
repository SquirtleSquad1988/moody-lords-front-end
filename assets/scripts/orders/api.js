'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createOrder = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data,
  });
};

const showOrders = function () {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const showOrder = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/orders/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const destroyOrder = function(id){
  return $.ajax({
    url: config.apiOrigin + '/orders/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE',
  });
};

const updateOrder = function(id, data) {
  return $.ajax({
    url: config.apiOrigin + '/orders/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
  },
    data
  });
};

module.exports = {
  createOrder,
  showOrder,
  showOrders,
  destroyOrder,
  updateOrder
};
