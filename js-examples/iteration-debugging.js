function iterationDebugging() {
  debugger;

  var fruits = [
    'apple',
    'banana',
    'raspberry',
    'blueberry',
    'strawberry',
    'mango',
    'pineapple',
  ];
  
  for (var i = 0; i < fruits.length; i++) {
    var fruit = fruits[i];
    console.log(fruit);
  }
}
