describe ("Pizza", function () {
  it("will create a Pizza object with values for size, meat toppings, and veggie toppings", function() {
  var testPizza = new Pizza ("large", 1, 2);
  expect(testPizza.pieSize).to.equal("large");
  expect(testPizza.meatToppings).to.equal(1);
  expect(testPizza.veggieToppings).to.equal(2);
  });

  it("will generate an error message for a pizza with no size selected", function () {
    var testPizza = new Pizza ("");
    expect(testPizza.pieSize).to.equal("");
  });

});

describe ("generatePrice", function () {
  it("will calculate a price for a pizza based on size, number of meat toppings, and number of veggie toppings", function () {
    var testPizza = new Pizza ("large", 1, 2);
    expect(testPizza.generatePrice()).to.equal("$22.00");
  });
  it("will calculate a price for a pizza with a size but no toppings", function () {
    var testPizza = new Pizza ("small");
    expect(testPizza.generatePrice()).to.equal("$14.00");
  });
});
