$(document).ready(function() {
    
    $("button").on('click', checkInputForPalindrome);


    function checkInputForPalindrome() {
        var word = $("input").val();
        var result = isPalindrome(word);
        $("#result").text(result);
    }

    /* 
    A palindrome is a word that is spelled the same forwards as 
    it is backwards.
    
    "pop" is a simple example.
    */
    function isPalindrome(string) {
        for (var i = 0; i < string.length/2; i++) {
            var frontLetter = string[i];
            var endLetter = string[string.length - i];
        
            if (frontLetter === endLetter) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
});