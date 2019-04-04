function each(collection, fn) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            fn(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            fn(collection[key], key, collection);
        }
    }
}



var arr = [1,2,3,4,5];
function doubleValue(value, index, collection) {
    collection[index] = value * 2;
}

each(arr, doubleValue);

