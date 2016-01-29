function Pizza(pieSize, meatToppings, veggieToppings) {
  this.pieSize = pieSize;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.price = 0;
};

Pizza.prototype.generatePrice = function () {
  if (this.pieSize === undefined) {
    return "Please choose a size.";
  } else {
  var price = 0;
  for (var i = 0; i < this.meatToppings; i++) {
    price += 2
  }
  for (var i = 0; i < this.veggieToppings; i++) {
    price += 1;
  }
  if (this.pieSize === "small") {
    price += 14;
  }
  if (this.pieSize === "medium") {
    price += 16;
  }
  if (this.pieSize === "large") {
    price += 18;
  }
  if (this.pieSize === "x-large") {
    price += 20;
  }
  return price;
  };
};
