function isPalindromeDebugging() {//DO NOT DELETE
    console.clear();
    debugger;
    /* 
    A palindrome is a word that is spelled the same forwards as 
    it is backwards.
    
    "pop" is a simple example.
    */
   
   console.log(isPalindrome("pop"));   // <== this is a palindrome
   console.log(isPalindrome("racecar"));  // <== this is too!
   
   console.log(isPalindrome("food"));   // <== this is not a palindrome
   console.log(isPalindrome("banana")); // <== neither is this
   
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