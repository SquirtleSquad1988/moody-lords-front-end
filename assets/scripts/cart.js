'use strict';

const cart = {
  items: [],
  getItems: function() {
    return this.items;
  },
  getTotal: function() {
    let total = 0;
    for(let i = 0; i < this.items.length; i++) {
      total += parseInt(this.items[i].price);
    }
    return total;
  }
};

module.exports = cart;
