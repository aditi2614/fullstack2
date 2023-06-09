// 1. Write a for loop that prints the numbers from 1 to 10

console.log('for loop');
for (let i = 1; i <= 10; i++) {
    console.log(i);

}

// 2. Write a while loop that prints the even numbers from 2 to 10.

"use strict"

let i = 1
while (i <= 10) {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++
}

// 3. Write a for loop that calculates the sum of numbers from 1 to 100.

// program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);