// Problem: 2667. Create Hello World Function
// Link: https://leetcode.com/problems/create-hello-world-function/
// Language: JavaScript
// Difficulty: Easy

var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
