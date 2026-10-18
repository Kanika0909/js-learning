// 1. Function that prints "Hello World"
// function sayHello(){
//     console.log("Hello World!");
// }
// sayHello();


// 2. Function that takes a name

// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet("Kanika");

// 3. Function that takes two numbers and returns their sum

// function sum(n1, n2){
//     return n1 + n2;
// }
// let result = sum(2, 4);
// console.log(result);

// 4. Function to calculate square

// function calculateSquare(num){
//     return num ** 2;
// }
// console.log(calculateSquare(6));

// 5. Function to check even/odd

// function checkOddEven(num){
//     if(num % 2 === 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// console.log(checkOddEven(5));

// 6. Calculate area of rectangle

// function calculateArea(length, width){
//     return length * width;
// }
// console.log(calculateArea(3, 4));

// 7. Calculate simple interest

// function calculateSI(p, r, t){
//     return p * r * t / 100;
// }
// console.log(calculateSI(20, 30, 40));

// 8. Largest of three numbers

// function findLargest(a, b, c){
//     if(a >= b && a >= c){
//         return a;
//     }else if(b >= a && b >= c){
//         return b;
//     }else{
//         return c;
//     }
// }
// console.log(findLargest(2, 5, 1))

// 9. Function that returns array length

// function getLength(arr){
//     return arr.length;
// }
// console.log(getLength([1, 2, 34, 4]));

// 10. Sum of all numbers in an array

// function sumOfElements(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(sumOfElements([2, 3, 4, 5, 6]));

// Using useReducer()

// function sumArray(arr){
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArray([2, 3, 4, 5, 6]));

// Functions with objects

const user = {
    name: "Kanika",
    age: 22,
    city: "Jaipur",
    salary: 60000
}

// 11. Function that prints user's name

// function printName(user){
//     console.log(user.name);
// }
// printName(user);

// 12. Function that returns user's salary

// function getSalary(user){
//     console.log(user.salary);
// }
// getSalary(user)

const product = {
    name: "Nike Shoes",
    price: 5000,
    category: "shoes"
};

// 14. Check whether product is expensive

// function isExpensive(product){
//     return product.price > 3000;
// }
// console.log(isExpensive(product));

// 15. Get products costing more than ₹3000

const products = [
    {name : "Shoes", price: 5000},
    {name: "T-shirt", price: 2000},
    {name: "Jeans", price: 3000}
]

// function getExpensiveProducts(products){
//     return products.filter(product => product.price > 3000);
// }
// console.log(getExpensiveProducts(products));

