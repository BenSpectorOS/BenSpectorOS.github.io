function iterationDebugging() {
  debugger;

  var fruits = [
    {kind: 'apple', price: 0.5},
    {kind: 'banana', price: 0.25},
    {kind: 'raspberry', price: 4},
    {kind: 'blueberry', price: 2.5},
    {kind: 'strawberry', price: 3},
    {kind: 'mango', price: 1},
    {kind: 'pineapple', price: 2.5}
  ];
  
  for (var i = 0; i < fruits.length; i++) {
    var fruit = fruits[i];
    var kind = fruit.kind;
    var price = fruit.price;
    console.log(`the price of one ${kind} is $${price}`);
  }
}
