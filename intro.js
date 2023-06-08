let a = 10, b = 20;

// Airthmetic operation

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Assignment operation

console.log('a==b', a == b, a === b);
console.log('a!=b', a != b, a !== b);
console.log('a>b', a > b);
console.log('a<b', a < b);
console.log('a>=b', a >= b);


// Logical operation

console.log('&&', true && true);
console.log('||', true || false);
console.log('!', !false);

if (a == 10 || b > 30) {
    console.log("values is valid");
}


//short hand

let x = 10;
x *= 5; //(x = x * 5;)
console.log("x", x);