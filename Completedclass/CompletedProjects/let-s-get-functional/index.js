// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-benspector3');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 * 
 * 4. To test your work, run the following command in your terminal:
 * 
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    const males = _.filter(array, function(element, index, array) {
        return element.gender === "male";
    })
    return males.length;
};

var femaleCount = function(array) {
    return _.reduce(array, function(result, element, index) {
        if (element.gender === "female") {
            return result + 1;
        } return result;
    },0)
};

var oldestCustomer = function(array) {
    var oldestAge = 0;
    return _.reduce(array, function(result, element, index) {
        if (element.age > oldestAge) {
            oldestAge = element.age;
            return element.name;
        } 
        return result;
    }, "")
};

var youngestCustomer = function(array) {
    var youngestAge = 1000;
    return _.reduce(array, function(result, element, index) {
        if (element.age < youngestAge) {
            youngestAge = element.age;
            return element.name;
        } return result;
    }, "")
};;

var averageBalance = function(array) {
    var bal = _.reduce(array, function(result, element, index) {
        return result + parseFloat(element.balance.replace(/,|\$/g, ''));
    }, 0);
    
    return bal / array.length;
};

var firstLetterCount = function(array, letter) {
    letter = letter.toLowerCase();
    return _.reduce(array, function(result, element, index) {
        if (element.name.toLowerCase().startsWith(letter)) {
            result++;
        }
        return result;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter) {
    letter = letter.toLowerCase();
    const friends = _.filter(array, function(object, key, array) {
       return object.name === customer; 
    })[0].friends;
    
    return _.reduce(friends, function(result, element, index) {
        if (element.name.toLowerCase().startsWith(letter)) {
            result++;
        }
        return result;
    }, 0);
}; 


var friendsCount = function(array, name) {
    var toReturn = [];
    _.each(array, function(element, index, array) {
        var friends = _.pluck(element.friends, 'name');
        if (_.contains(friends, name)) {
            toReturn.push(element.name);
        }
    });
    return toReturn;
};

var topThreeTags = function(array) {
    var topThree = [];
    var tags = {};
    
    /* Count the total occurrances of each tag across customers */
    _.each(array, function(customer, index, customers) {
        _.each(customer.tags, function(tag, index, customerTags) {
            tags[tag] ? tags[tag]++ : tags[tag] = 1;
        });
    });
    
    /* Fill an array with array pair elements [tag, count] */
    _.each(tags, function(count, tag, object) {
        topThree.push([tag, count]);
    })
    
    /* Sort the array by the count*/
    topThree.sort(function(tagA, tagB) {
        return tagB[1] - tagA[1];
    })
 
    /* Return the first three tags elements of the array*/
    return [topThree[0][0], topThree[1][0], topThree[2][0]];
};

var genderCount = function(array) {
    var genders = {
        male: 0,
        female: 0,
        transgender: 0
    };
    
    return _.reduce(array, function(result, customer, index) {
        if (customer.gender === 'male') {
             result.male++
        } else if (customer.gender === 'female') {
            result.female++
        } else {
            result.transgender++
        }
        return result;
    }, genders);
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
