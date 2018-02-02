(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var backgroundBox;
        
        var buildings = [];
        var tree;
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // TODO: 3 - YOUR DRAW CODE GOES HERE

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'#9b0707');
            background.addChild(backgroundFill);
            
            var moon = draw.bitmap('img/moon.png');
            moon.x = 70;
            moon.y = 25;
            moon.scaleX = 0.2;
            moon.scaleY = 0.2;
            background.addChild(moon);
            
            var circle;
            var stars = [];
            for(var i=0;i<100;i++) {
                circle = draw.circle(10,'white','LightGray',2);
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random();
                background.addChild(circle);
                stars.push(circle);
            }
            
            // backgroundBox = draw.rect(100,100,'Blue');
            // backgroundBox.x = 400;
            // backgroundBox.y = groundY-100;
            // background.addChild(backgroundBox);
            
            var buildingHeight = 300;
            var building, height;
            for(var i=0;i<8;++i) {
                height = Math.random() * (buildingHeight-100) + 100;
                building = draw.rect(75,height,'LightGray','Black',1);
                building.x = 200*i;
                building.y = groundY-height;
                background.addChild(building);
                buildings.push(building);
            }
            
            var scale;
            var treeHeight = 235;
            // for(var i=0;i<3;++i) {
                scale = Math.random() * 0.8 + 0.2;
                tree = draw.bitmap('img/christmas-tree.png');
                tree.x = 400*i;
                tree.y = groundY-(235 * scale);
                tree.scaleX = scale;
                tree.scaleY = scale;
                
                background.addChild(tree);
            // }
            
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            for (var i=0; i<buildings.length; i++) {
                var building = buildings[i];
                building.x = building.x - 1;
                if(building.x < -100) {
                    building.x = canvasWidth;
                }
            }
            
            tree.x = tree.x - 2;
            if(tree.x < -100) {
                tree.x = canvasWidth;
            }
            
            

        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
}(window));