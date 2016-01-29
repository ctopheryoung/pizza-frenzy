describe ("Pizza", function (){
  it("will create a Pizza object with values for size, meat toppings, and veggie toppings", function() {
  var testPizza = new Pizza ("large", 1, 2);
  expect(testPizza.pieSize).to.equal("large");
  expect(testPizza.meatToppings).to.equal(1);
  expect(testPizza.veggieToppings).to.equal(2);
  });
});
