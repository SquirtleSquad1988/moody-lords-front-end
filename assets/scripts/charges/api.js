'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createCharge = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/charges',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data,
  });
};

module.exports = {
  createCharge
};
