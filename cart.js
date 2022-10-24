'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },

  add(name, price, count = 1) {
    const obj = {name, price, count};
    cart.items.push(obj);
    this.increaseCount(count);
    this.calculateItemPrice(price, count);
  },
  increaseCount(count) {
    this.count += count;
  },

  calculateItemPrice(price, count) {
    return this.totalPrice += price * count;
  },

  clear() {
    this.totalPrice = 0;
    this.count = 0;
    this.items = [];
  },
  print() {
    console.log(JSON.stringify(cart));
  },
};

cart.add('notebook', 132000, 1);
cart.add('mouse', 1500, 2);
cart.add('pads', 5500, 4);
cart.print();
