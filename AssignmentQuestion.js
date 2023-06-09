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


// 4. Write a while loop that calculates the product of numbers from 1 to 10.


// program to display numbers from 1 to 5
// initialize the variable
let k = 1, n = 5;

// while loop from i = 1 to 5
while (k <= n) {
    console.log(k);
    k += 1;
}

// 5. Write a for loop that prints the multiplication table of a given number.

// program to generate a multiplication table

// take input from the user
const num = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for (let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * num;

    // display the result
    console.log(`${num} * ${i} = ${result}`);
}

// 6. Write a while loop that finds the factorial of a given number.

//Find factorial of a number

//5! = 5*4*3*2*1 = 120
//6! = 6*5*4*3*2*1 = 720

let m = 6, f = 1, fact = 1
while (f <= n) {
    fact = fact * f
    f++
}
console.log(fact)

//for loop
for (f = 1; f <= m; f++) {
    fact = fact * f
}
console.log(fact)

// 7. Write a for loop that prints the Fibonacci series up to a given number of terms.

// program to generate fibonacci series up to n terms

// take input from the user
const no = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= no; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// 8. Write a while loop that checks if a given number is prime.

// program to check if a number is prime or not

// take input from the user
const numberr = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (numberr === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (numberr > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < numberr; i++) {
        if (numberr % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${numberr} is a prime number`);
    } else {
        console.log(`${numberr} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}