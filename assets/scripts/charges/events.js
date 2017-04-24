'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const cart = require('../cart');
const ordersUI = require('../orders/ui');
const ordersAPI = require('../orders/api');
const orderEvents = require('../orders/events');
const orderComplete = require('../orderdone');

const onCreateCharge = function (event, order) {
  event.preventDefault();
  let handler = StripeCheckout.configure({
    key: 'pk_test_yXYwJzXcrHetlYOqKa0tp7k0',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      let creds = {
        token: token.id,
      };
      api.createCharge(creds)
        .then(() => {
          let data = {
              order: {
                items: cart.getItems(),
                complete: true
            }
          };
          ordersAPI.updateOrder(order.id, data);
          orderComplete.setId('');
          ordersUI.clearCart();
        })
        .catch(() => {
          alertify.error("There was an error processing your order");
        });
      }
  });
  handler.open({
    name: 'Moody Lords',
    description: 'Cart',
    amount: cart.getTotal() * 100
  });
};


module.exports = {
  onCreateCharge
};
