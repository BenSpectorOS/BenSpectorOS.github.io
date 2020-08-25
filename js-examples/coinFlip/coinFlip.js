$(document).ready(function() {
    // setup
    
    var totalFlips = 1000;

    $("button").on('click', runTest)

    // core logic
    function runTest() {
        // reset heads to 0 before each test
        var heads = 0;
        
        // run the test totalFlips times
        for (var flips = 0; flips < totalFlips; flips++) {
            var result = coinFlip();
            if (result === "heads") {
                heads++;
            }
        }
        
        // display the result
        $("#heads").text("Heads: " + heads);
        $("#totalFlips").text("Out of: " + totalFlips);
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
