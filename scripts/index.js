'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
const store = {
  items: [
    { id: cuid(), name: 'apples', checked: false, createdAt: Date.now() - 10000000000 },
    { id: cuid(), name: 'oranges', checked: false, createdAt: Date.now() -8200000000 },
    { id: cuid(), name: 'milk', checked: true, createdAt: Date.now() - 40000000 },
    { id: cuid(), name: 'bread', checked: false, createdAt: Date.now() - 300000000 }
  ],
  hideCheckedItems: false,
  searchTerm: '',
  sortBy: 'alpha'
};

console.log(store[0].createdAt);

function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
}

$(main);
