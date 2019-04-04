function reverseString(str) {
    var result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        result = str[i] + result;
    }
    return result;
}

var newStr = reverseString("hello");