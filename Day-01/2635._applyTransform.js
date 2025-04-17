// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]

// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 

// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.


// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 4




var map = function(arr, fn) {
    let arr2=[]
    for(let i=0;i<=arr.length-1;i++){
        let sum=0;
        sum=fn(arr[i],i)
        arr2.push(sum)
    }

    return arr2
    
};




// It works because:
// JavaScript functions don’t care if you pass extra arguments.

// If constant() is declared with no parameters, the values you pass are simply ignored.

// Since the function just returns 42 and doesn't use any input, it behaves the same no matter what you pass.
