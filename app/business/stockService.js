let stock = {
  espresso: 5,
  water: 10,
};

function checkStock(type) {
  return stock[type] > 0 && stock.water > 0;
}

function useIngredients(type) {
  stock[type] -= 1;
  stock.water -= 1;
}

module.exports = { checkStock, useIngredients };
