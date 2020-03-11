$(document).ready(function() {
    // initialization
    var headsSoFar;
    var maxFlips = 1000;

    $("button").on('click', runTest)

    // core logic
    function runTest() {
        // reset headsSoFar to 0 before each test
        headsSoFar = 0;
        
        // run the test maxFlips times
        for (var flips = 0; flips < maxFlips; flips++) {
            if (coinFlip() === "heads") {
                headsSoFar++;
            }
        }
        
        // display the result
        $("#result").text(headsSoFar + " out of " + maxFlips);
    }


    // helper function
    function coinFlip() {   
        var randomDecimal = Math.random();
        if (randomDecimal > 0.5) {
            return "heads";
        } else {
            return "tails";
        }	
    }
});