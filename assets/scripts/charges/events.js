'use strict';

const api = require('./api.js');
const cart = require('../cart');
const ordersUI = require('../orders/ui');
const ordersAPI = require('../orders/api');
const authUI = require('../auth/ui');
const recordAPI = require('../records/api');
const orderComplete = require('../orderdone');

const onCreateCharge = function (event, order) {
  event.preventDefault();
  let handler = StripeCheckout.configure({
    key: 'pk_test_yXYwJzXcrHetlYOqKa0tp7k0',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      let creds = {
        charge: {token: token.id},
      };
      api.createCharge(creds)
        .then(() => {
          let data = {
              order: {
                items: cart.getItems(),
                complete: true
            }
          };
          let deletePurchasedRecords = function () {
            for (let i = 0; i < cart.items.length; i++) {
              recordAPI.destroyRecord(cart.items[i].id);
            }
          };
          // deletePurchasedRecords();
          ordersAPI.updateOrder(order.id, data);
          orderComplete.setId('');
          ordersUI.clearCart();
          authUI.homepageRender();
          alertify.success("Records Successfully Purchased");
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
