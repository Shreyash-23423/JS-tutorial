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