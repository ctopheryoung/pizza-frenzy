function Pizza(pieSize, meatToppings, veggieToppings) {
  this.pieSize = pieSize;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.price = 0;
};

Pizza.prototype.generatePrice = function () {
  debugger;
  if (this.pieSize === "") {
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
    var meatToppings = $(".meatChoices:checked").length;
    var veggieToppings = $(".veggieChoices:checked").length;
    var testPizza = new Pizza(pieSize, meatToppings, veggieToppings);
    if (testPizza.pieSize === "") {
      alert("Please select a size for your pizza.");
    } else {
    $("#pizzaCost").empty();
    $("#pizzaCost").append(testPizza.generatePrice());
    $("#pizzaOrdered").show();
  }

  event.preventDefault();

 })
});
