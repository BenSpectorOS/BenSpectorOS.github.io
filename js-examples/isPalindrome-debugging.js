function isPalindromeDebugging() {//DO NOT DELETE
    console.clear();
    debugger;
    /* 
    A palindrome is a word that is spelled the same forwards as 
    it is backwards.
    
    "pop" is a simple example.
    */
    var word = prompt("choose a word");
    alert("is " + word + " a palindrome? " + isPalindrome(word));

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



} //DO NOT DELETE