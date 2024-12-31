// Prevent us from attempting to use variables
// that are not declared
"use strict"

function greet(name = 'Guest') {  //copied given to get started
    console.log('Hello, ' + name + '!');
}

greet();         // Output: "Hello, Guest!"
greet("Diane");    // Output: "Hello, Diane!"

//Thnak you for these assignments, the practice is so helpful and much better than watching videos
//I feel like the previous exercises have given me plenty of experience with functions