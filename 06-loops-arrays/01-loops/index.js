console.log("hello world");

/*
The "While" loop - executes a block of code as long as a specified condition is true
while (condition) {
    code
    loop body
}

do....while loop: similar to the while loop, but it guaranteees that the loop body is executed at least once, even if the condition is false.
do {
    // code to be executed
} while (condition)

Continue directive: lighter version of break. It doesn't stop the whole loop.
- It stops the current iteration and forces the loop to start a new one(if condition allows).

for...in loop: iterates over the enumerable properties of an object. Commonly used to loop through the keys of an object.
for(let key in object) {
    // code to be executed
}

Objects Side Quest.
const obj = { a: 1, b:2 }; created an object called obj
{
    a: 1,
    b: 2
}  called own properties becuse they belong directly to obj

Object.prototype.c = 3; - added propery c to object.prototype, its like saying "all objects in JavaSCirpt should inherit a property c with the value 3"

So even though obj doesn’t have its own c, if you try obj.c, JavaScript will still return 3 — because it's inherited through the prototype chain.

🧠 Think of it like this:

obj.a → Found directly on obj

obj.c → Not found on obj, so JS looks up its prototype, and finds it on Object.prototype.

for (let key in obj) {
    if (obj.hasOwnProperty(key)) { That method checks if the property is an own property of obj — not one from its prototype.
        console.log(key);
    }
}
Loops over all enumerable properties, including those inherited from the prototype

for...of loop: iterates over iterable objects such as arrays, strings, maps, sets.
provides a simpler way to loop through values compared to for...in.

for(let value of iterable) {
    // code to be executed
}

for loop: control flow statement that allows you to repeatedly execute a block of code a specific number of times.

for (initialization; condition; increment/decrement) {
    // code to be executed
}
- Initialization: Executed once before the loop starts.TYpically used to initialize a a counter variable.
- Condition: Evaluated before each iteration. If true the loop continues; if false the loop stops.
- Increment/decrement: EXecuted at the end of each iteration. It updates the counter variable.

How a for Loop Works
The initialization is executed.

The condition is checked. If true, the loop body is executed; if false, the loop terminates.

After the loop body is executed, the increment/decrement statement is executed.

The condition is checked again, and the process repeats until the condition becomes false.
*/

// While loop
let i = 0;
while (i < 3) {
    console.log(i); // Output: 0, 1, 2
    i++;  // Not adding the i++ or i-- will cause an infinite loop
}

let a = 0;
while (true) {
    console.log(a);  // Output: 0, 1, 2, 3, 4
    a++
    if (a === 5) {
        break; // Exits the loop
    }
}

// do...while loop
// Basic do...while loop
let b = 0;
do {
    console.log(b); // Output: 0, 1, 2, 3, 4
    b++;
} while (b < 5);

// condition is false initially

let c = 9;
do {
    console.log(c); // Output: 9 (executes once even though condition is false)
    c++;
} while (c < 5);

// Using continue - skips the specified iteration.

let d = 0;
do {
    d++;
    if (d === 3) {
        continue; // Skip iteration when d is 3
    } 
    console.log(d); // Output: 1, 2, 4, 5 the output starts from one because we are incrementing d before logging.
} while (d < 5);

// Looping through object properties
let person = {
    name: "ALice",
    age: 25,
    job: "Developer"
}

for (const key in person) {
    console.log(key);
}
// Output:
// name
// age
// job

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25
// job: Developer

// LOoping through array indices
let fruits = ["Apple", "Banana", "Cherry"];
for (const index in fruits) {
    console.log(index);  // Output: 0, 1, 2, prints the index of the array items
}

// Avoiding prototype properties
let obj = {
    a: 1,
    b: 2,
};
Object.prototype.c = 3; // Add a property to the object prototype.
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key); // Output: a, b (ignores prototype property 'c')
    }
}

// For...of looping through an array
for (const fruit of fruits) {
    console.log(fruit);  // Output: Apple, Banana, Cherry
}

// looping through a string
let str = "calendar";
for (const char of str) {
    console.log(char);  // Output: c, a, l, e, n, d, a, r
}

// Looping through a set
let set = new Set([1, 2, 3, 4])
for (const value of set) {
    console.log(value); // Output: 1, 2, 3, 4
}

/*
Challenge Exercises
Easy
    Use a while loop to print numbers from 1 to 10.

    Use a do...while loop to print numbers from 1 to 5.

    Use a for...in loop to print all keys and values of an object.

    Use a for...of loop to print all elements of an array.

    Use a while loop to calculate the factorial of a number.

Medium
    Use a do...while loop to repeatedly prompt the user for input until they enter "quit".

    Use a for...in loop to count the number of properties in an object.

    Use a for...of loop to find the sum of all elements in an array.

    Use a while loop to reverse a string.

Hard
    Use a for...of loop to iterate over a Map and print its key-value pairs.
*/

let e = 0;
while (e < 10) {
    e++;
    console.log(e); // Output: 1, 2, 3, 4, 5, 6, 7, 8, ,9, 10
    // e++;
};

let f = 0;
do {
    f++;
    console.log(f); // Output: 1, 2, 3, 4, 5
    
} while (f < 5);

let car = {
    brand: "Toyota",
    model: "Corolla",
    make: 2018,
    driver: "Sedanly"
}

for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}

/* output
brand: Toyota
model: Corolla
make: 2018
driver: Sedanly
c: 3 ----- the object.prototype
 */

let random = ["music", "dj", "bottle", "concert", "headphones"];

for (const rando of random) {
    console.log(rando);  // Output: music, dj, bottle, concert, headphones
}

// While Loop to Calculate Factorial, !n 
let number = 5;
let factorial = 1;
let g = number;

while (g > 0) {
    factorial *= g; // Multiply factorial by g
    g--; // Decrease g by 1
}

console.log(factorial); // Output: 120 (when number is 5)

// let sum = 0;

// do {
//     let value = +prompt("Enter a number", '');
//     if (!value) break

//     sum += value
// } while (true);

// alert('Sum: ' + sum);
// console.log('Sum: ' + sum);

// let userInput;

// do {
//     userInput = prompt("Enter something (type 'quit' to exit): ");
// } while (userInput !== "quit");

// console.log("You exited the loop.");

let counter = 0;
for (const key in car) {
    counter++
}
console.log('The car has ' + counter + ' properties');  Output: 5

let numbers = [2, 5, 7, 9, 23, 56, 90];
let add = 0;

for (const num of numbers) {
    add += num
}
console.log("Sum of elements:", add);  // Output: 192

let word = "hello"
let reversedWord = "";
let h = word.length - 1

while (h >= 0) {
    reversedWord += word[h]
    h--;
}

console.log(reversedWord);  // Output: "olleh"

// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
    // Output: 0, 1, 2, 3, 4
}

// iterating over an array
let singers = ["Taylor", "Beyonce", "Mutoriah", "Adele", "Ed sheeran"]

for (let i = 0; i < singers.length; i++) {
    console.log(singers[i]);
    // Output: Taylor, Beyonce, MUtoriah, Adele, Ed sheeran
}
/*
Explanation:
The loop iterates over each element in the singers array.
singers.length ensures the loop runs for the correct number of iterations.
*/

// COunting Backwards

for (let i = 10; i > 0; i--) {
    console.log(i);
    // Output: 10, 9, 8, ..., 1
}

/*
Explanation:
i starts at 10 and decrements by 1 after each iteration.
The loop stops when i is no longer greater than 0.
*/

// Nested for loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
        
    }
}

/*
output
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
Explanation:
The outer loop runs 3 times, and for each iteration of the outer loop, the inner loop runs 3 times.
*/

// Skipping iterations with continue

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue  // Skip iteration when i is 2
    }
    console.log(i);   // Output: 0, 1, 3, 4
}

/*
Explanation:
When i === 2, the continue statement skips the rest of the loop body for that iteration.
*/

// Breaking out of a loop with Break
for (let i = 0; i < 10; i++) {
    if (i === 6) {
        break; // Exit the loop when i is 6
    }
    console.log(i); // Output: 0, 1, 2, 3, 4, 5
}

/*
Explanation:
When i === 5, the break statement terminates the loop.
*/

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) { // if true, skip the remaining part of the body
        continue
    }
    console.log(i); // 1, then 3, 5, 7, 9
}

/*
Challenge Exercises
Easy
Write a for loop to print numbers from 1 to 10.

Write a for loop to print all even numbers between 1 and 20.

Use a for loop to calculate the sum of numbers from 1 to 100.

Write a for loop to print the multiplication table of 5 (up to 5 * 10).

Use a for loop to reverse a string (e.g., "hello" → "olleh").

Medium
Write a for loop to find the largest number in an array of numbers.

Use a for loop to count the number of vowels in a string.

Write a for loop to remove all duplicates from an array.

Use a for loop to print a pyramid pattern:

Hard
Write a for loop to find all prime numbers between 1 and 100.
*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`The number ${i}  is even.`);
    } 
}

for (let i = 2; i <= 20; i += 2){
    console.log(`The number ${i}  is even.`);
}

let summation = 0

for (let i = 1; i <= 100; i++) {
    summation += i
}
console.log(summation);

for (let i = 0; i <= 10; i++){
    console.log(`5 * ${i} = ${5 * 1}`);
}

let greeting = "hello";
let reversedGreeting = "";


for (let i = greeting.length - 1; i >= 0; i--) {
    reversedGreeting += greeting[i]
}
console.log(reversedGreeting);

let digits = [10, 20, 5, 30, 15, 3];
let max = digits[0]

for (let i = 1; i < digits.length; i++) {
    if (digits[i] > max) {
        max = digits[i]
    }
}
console.log(max);

let min = digits[0]
for (let i = 1; i < digits.length; i++) {
    if (digits[i] < min) {
        min = digits[i]
    }
}
console.log(min);

// Count number of vowels in a string
let name = "Taylor Swift eve";
let vowels = "aeiou";
let count = 0

for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i].toLowerCase())) {
        count++
    }
}
console.log(count);

/**
char >= 'a' && char <= 'z' works because JavaScript compares characters based on their Unicode values, and lowercase letters 'a' to 'z' fall between 97 and 122.
 */
let consonantCount = 0;
for (let i = 0; i < name.length; i++) {
    let char = name[i].toLowerCase()

    if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
        consonantCount++
    }
}

console.log(consonantCount);

// remove duplicates
let arr = [1, 2, 3, 4, 5, 6, 5, 4, 7, 8, 3, 2, 1, 9]
let unique = []
for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i])
    }
}
console.log(unique);

let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

// find prime numbers between 1 and 100
for (let i = 2; i <= 100; i++){
    let isPrime = true;
    
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}