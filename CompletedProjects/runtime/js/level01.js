var level01 = function (window) {
    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY, scale: 1, loc:'img/sawblade.png'},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'sawblade',x:1200,y:groundY - 110},
                {type: 'sawblade',x:1900,y:groundY},
                {type: 'sawblade',x:2400,y:groundY - 110},
                {type: 'giftbox',x:600, y:groundY - 110, scale: 0.4, loc:'img/Gift-Box-icon.png'},
                {type: 'giftbox',x:1500, y:groundY},
                {type: 'giftbox',x:3000, y:groundY},
                {type: 'prize', x:3300, y: groundY - 150}
            ],
            gameEnemies: [
                {type: 'elf', x:550, y:groundY-50, scoreBonus:100, damage:-10},
                {type: 'elf', x:1000, y:groundY-50, scoreBonus:100, damage:-10},
                {type: 'elf', x:1800, y:groundY-50, scoreBonus:100, damage:-10},
                {type: 'elf', x:2600, y:groundY-50, scoreBonus:100, damage:-10},
                {type: 'elf', x:3200, y:groundY-50, scoreBonus:100, damage:-10},
                {type: 'santa', x:3600, y:groundY-160, scoreBonus:1000, damage:-50}
            ]
            
        };
        window.levelData = levelData;

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle, obstacleImage;
        
        levelData.gameItems.forEach(function(gameItem) {
            myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
    
            myObstacle.x = gameItem.x;
            myObstacle.y = gameItem.y;
            
            if (gameItem.type === 'sawblade'){
                obstacleImage = draw.bitmap('img/sawblade.png');
            } else if (gameItem.type === 'giftbox') {
                obstacleImage = draw.bitmap('img/Gift-Box-icon.png');
                obstacleImage.scaleX = 0.4;
                obstacleImage.scaleY = 0.4;
            } else if (gameItem.type ==='prize') {
                obstacleImage = draw.bitmap('img/mario-star-icon.png');
                obstacleImage.scaleX = 0.4;
                obstacleImage.scaleY = 0.4;
                myObstacle.onPlayerCollision = function() {
                    game.increaseScore(2000)
                    myObstacle.shrink(500);
                };
                myObstacle.type = 'reward';
            }
            
            // If you want to include location / scale in your data
            // obstacleImage = draw.bitmap(element.loc);
            // obstacleImage.scaleX = element.scale;
            // obstacleImage.scaleY = element.scale;
            
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
            game.addGameItem(myObstacle);
        });
        
        levelData.gameEnemies.forEach(function(gameEnemy) {
            createEnemy(gameEnemy.type, gameEnemy.x, gameEnemy.y, gameEnemy.scoreBonus, gameEnemy.damage);
        });
        
        
        // Add Enemies!
        function createEnemy(type, x, y, scoreBonus, damage) {
            var enemy, enemyImage;
        
            if (type === 'elf') {
                enemy =  game.createGameItem('enemy',25);
                enemyImage = draw.bitmap('img/elf.png');
                enemyImage.scaleX = 0.4;
                enemyImage.scaleY = 0.4
                enemyImage.x = -25;
                enemyImage.y = -25;
                enemy.velocityX = -2;
            } else if (type === 'santa') {
                enemy =  game.createGameItem('enemy',128);
                enemyImage = draw.bitmap('img/Santa.png');
                enemyImage.x = -128;
                enemyImage.y = -128;
                enemy.velocityX = -4;
            }
            
            enemy.addChild(enemyImage);
            
            enemy.x = x;
            enemy.y = y;
            
            
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(damage);
                enemy.fadeOut();
            };
            
            enemy.onProjectileCollision = function() {
              console.log('Halle has hit the enemy');
              game.increaseScore(scoreBonus);
              enemy.flyTo(enemy.x + 120,enemy.y - 200);
            };
            
            game.addGameItem(enemy);
        }
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}