(function(){
  "use strict";

  function createBookShop(inventory) {
    return {
      inventory: inventory,
      inventoryValue: function() {
        return this.inventory.reduce((total, book) => total + book.price, 0);
      },
      priceForTitle: function(title) {
        return this.inventory.find(book => book.title === title).price;
      }
    }
  }

  const inventory = [
    { title: 'Herry Potter', price: 10 },
    { title: 'JS Book', price: 15 },
  ];

  const bookShop = createBookShop(inventory);

  console.log(bookShop.inventoryValue())
  console.log(bookShop.priceForTitle('Herry Potter'))

})();
