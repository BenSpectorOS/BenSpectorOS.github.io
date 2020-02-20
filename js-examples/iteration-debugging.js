function iterationDebugging() {

  var fruits = ["apples", "bananas", "cherries", "dates", "elderberries"];
  
  debugger;
  
  for (var i = 0; i < fruits.length; i++) {
    console.log("I like " + fruits[i]);
  }
  
}