 // global variables
// // arithmetic operators
// let a = 10;
// let b = 2;
// console.log("a+b=", a + b);
// console.log("a-b=", a - b);
// console.log("a*b=", a * b);
// console.log("a/b=", a / b);
// console.log("a%b=", a % b);
// console.log("a**b=", a ** b);


// unary operators
// console.log("a=", a, "b=", b);
// a++;
// console.log("a=", a);

// assignment operators
// a += 4;
// console.log("a=", a);

// comparison operator
// console.log("a==b", a == b);
// console.log("a>b", a > b);


// // logical operator

// let cond1 = a > b;
// let cond2 = a == 10;
// console.log("cond1 && cond2", cond1 && cond2);
// console.log("cond1 || cond2", cond1 || cond2);
// console.log("!(a<b)", !(a < b));






//  // //conditional statement// // //

// // Conditional statement example

// let age = 5;
// if (age >= 18) {
//     console.log("eligible for licence");
// } else {
//     console.log("not eligible for licence");
// }

// let mode = "dark";
// let color;
// if (mode == "dark") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);

// // Check if a number is odd or even
// let num = 10;
// if (num % 2 == 0) {
//     console.log("num is even");
// } else {
//     console.log("num is odd");
// }


// if (mode==="dark"){
//     color="black";
// }else if (mode=="blue"){
//     color="blue";
// }else if(mode=="pink"){
// color="pink";
// }else{
//     color="white";
// }
// console.log(color);


// // // Ternary operator example
// let age = 18;
// age >= 18 ? console.log("Yes") : console.log("No");

// ternary operator

// age >= 18 ? console.log("Yes") : console.log("No");




// // // loops // // //

// for (let i = 0; i < 5; i++) {
//     console.log("Bankai",i);
// }

// // calculate sum of n natural numbers
// let n=5;
// let sum=0;
// for( i=1 ;i<=n;i++){
//     sum = sum+i;
// }
// console.log("Sum of first", n, "natural numbers is:", sum);
// console.log("Loop ended");

// // while loop //
// let i=1;
// while(i<=5){
//     console.log("bankai");
//     i++;
// }

// // // do while loop // //
// let i =1;
// do {
//     console.log("bankai");
//     i++;
// } while (i <= 5);

// // // for of loop // //
// let str = "bankai"
// for(let i of str){
//     console.log(i);
// }   

// let str = "bankai"
// let size=0;
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log("Size of the string is:", size);


// // // for in loop // //
// let student ={
//     name: "John",
//     age: 21,
//     grade: "A"
// }
// for(let key in student){
//     console.log(key, ":", student[key]);
// }


// // // strings / //
// let str = "Hello, World!";
// console.log(str[2]);

// // template literals // //
// let specialstring = `this is a special string  ${1+2+3}`;
// console.log(specialstring);

// // // // methods  in strings//
//  let str1 = "   getsuga tenshou";
//  let str2 = "bankai";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// // console.log(str.trim());
// console.log(str1.slice(3, 8));
// console.log(str1.replace("tenshou", "bankai"));
// console.log(str1.includes("getsuga"));
// console.log(str1.charAt(5));
// console.log(str1.concat(str2));


// // // chp 4 arrays // //
// let  marks = [90, 80, 70, 60, 50];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["Ichigo", "Naruto", "Goku"];
// console.log(heroes);
// console.log(heroes.length);
// console.log(heroes[1]);
// heroes[1] = "Sasuke";
// console.log(heroes);

// // usingfor loop to iterate through array
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

// // // using for of loop to iterate through array
// for (let hero of heroes) {
//     console.log(hero);
// }


// // // array methods // //
// let vegetables = ["carrot", "broccoli", "spinach"];
// vegetables.push("potato");
// vegetables.push("pumpkin");
// console.log(vegetables);
// vegetables.pop();
// console.log(vegetables);
// console.log(vegetables.toString());

// let fruits = ["apple", "banana", "orange"];
// let all = vegetables.concat(fruits);
// console.log(all);
// fruits.unshift("grape", "mango");
// console.log(fruits);
// fruits.shift();
// // console.log(fruits);
// console.log(vegetables.slice(1, 3));

// // add element
// console.log(fruits.splice(1, 0, "kiwi", "pear"));
// console.log(fruits);

// // delete elements
// console.log(fruits.splice(2, 2));
// console.log(fruits);

// repalace elements
// console.log(fruits.splice(1, 2, "peach", "plum"));


// // // functions // //
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// greet("Alice");
// // greet("Bob");

// function add(a, b) {
//     console.log(a + b);
// }
// add(5, 10);
// add(20, 30);

// // arrow function
// const multiply = (a, b) => {
//     console.log(a * b);
// }
// multiply(5, 10);
// multiply(20, 30);

//  // /// for each loop // //
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach( function (num) {
//     console.log(num);
// });

// // map method
// let numbers = [1, 2, 3, 4, 5];
// let newarr = numbers.map(function (num) {
//     return num * num;
// });
// console.log(newarr);

// // // filter method
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = numbers.filter( (num) => {
//      return num % 2 == 0; });
// console.log(even);

// // // reduce method
//  let numbers = [1, 2, 3, 4, 5];
// numbers.reduce( (accumulator, current) => {
//     return accumulator + current;
// }, 0);
// console.log(numbers);

// randomnumbers= [5,4,6,8,8,8,7,9,3,2,1];
// const output=randomnumbers.reduce((previous,current)=>{
//     return previous>current ? previous:current;
// },0);
// console.log(output);

