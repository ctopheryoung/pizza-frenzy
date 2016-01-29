function Pizza(pieSize, meatToppings, veggieToppings) {
  this.pieSize = pieSize;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.price = 0;
};

Pizza.prototype.generatePrice = function () {
  if (this.pieSize === "not-selected") {
    return "Error: Please choose a size.";
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
  return "$" + price + ".00";
  };
};

$(document).ready(function() {
  $("form#pizzaOptions").submit(function(event) {
    var pieSize = $("select#pieSize").val();
    console.log(pieSize);
    var meatToppings = 0;//claculate number of meats chosen
    var veggieToppings = 0;//calculate number of veggies chosen
    var testPizza = new Pizza(pieSize, meatToppings, veggieToppings);
    $("#pizzaCost").empty();
    $("#pizzaCost").append(testPizza.generatePrice());
    $("#pizzaOrdered").show();


  event.preventDefault();
 })
});
