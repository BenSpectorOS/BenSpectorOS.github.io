var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        var circles = [];        

        for (var count = 1; count <= 100; count++) {
            var circle = draw.randomCircleInArea(canvas, true, true, '#999', 2, {radius: 100, x:canvas.width, y:canvas.height});
            circle.x = 100;
            circle.y = 200;
            circle.velocityX = -5 + (Math.random() * 10);
            circle.velocityY = -5 + (Math.random() * 10);
            view.addChild(circle);
            circles.push(circle);
        }
    
        view.addChild(fps);
        app.addUpdateable(fps);
    
        game.checkCirclePosition = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////
            
            // if the circle has gone out the right side of the screen then place it off-screen left
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            } 
            // TODO 5a) if the circle has gone out of the left side of the screen then place it off-screen right
            else if ( circle.x  <  0 ) {
                circle.x = canvas.width;
            } 

            // TODO 5b) if the circle has gone out of the top side of the screen then place it off-screen bottom
            if ( / * Fill me in * / ) {
                
            } 
            // TODO 5a) if the circle has gone out of the left side of the screen then place it off-screen right
            else if ( / * Fill me in * / ) {
                
            } 
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        }
    
        var update = function() {
           
            for (var i = 0; i <= circles.length - 1; i++) {
                circles[i].x += circles[i].velocityX;
                circles[i].y += circles[i].velocityY;
                game.checkCirclePosition(circles[i]);    
            }
            
            
        }
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
