var contains = function(x, arr) {
  // iterate over the array
  for (var i = 0; i < arr.length; i++) {
    // look at every value
    var currentValue = arr[i];
    
    
    // is the currentValue x?
    if (currentValue === x) {
      return true;
    }
  }
  // the loop is done, the value wasn't found  
  return false;
}