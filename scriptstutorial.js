 // global variables
// // arithmetic operators
// let a = 10;
// console.log(a++)
// console.log(a++)
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
 
//  to calculate maximum number in array using reduce method
// let numbers1  = [1, 2, 3, 4, 5];
// const output1=numbers1.reduce((previous,current)=>{
//     return previous>current ? previous:current;
// });
// console.log(output1); 

// randomnumbers= [5,4,6,8,8,8,7,9,3,2,1];
// const output=randomnumbers.reduce((previous,current)=>{
//     return previous>current ? previous:current;
// },0);
// console.log(output);



// // dom manipulation
// let heading = document.getElementsByClassName("heading-class");
// console.dir(heading);
// console.log(heading);

// let button = document.getElementsByClassName("butooon");
// console.dir(button);
// console.log(button);

// let paras = document.getElementsByTagName("p");
// console.dir(paras);
// console.log(paras);

// // query selector

// let firstelement = document.querySelector("p");
// console.dir(firstelement);

// let allelements = document.querySelectorAll("p");
// console.dir(allelements);

// let classelements = document.querySelectorAll(".heading-class");
// console.dir(classelements); 

// console.dir(document.body.firstChild);


// let div = document.querySelector("div");
// console.dir(div);
// div.innerText = "This is changed text using JavaScript";

// let heading = document.querySelector("h1");
// console.dir(heading);

// heading.innerText="new heading set using javascript";  

// // attributes
// let div = document.querySelector("div");
// console.dir(div);

// console.log(div.getAttribute("id"));
// console.log("id");

// let para= document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));

// // to access the stle of an element
// let div =document.querySelector("div");
// div.style.backgroundColor="blue";   
// div.style.fontSize="20px";
// div.innerText="style changed using javascript";

// // insert elements 
// let newpara = document.createElement("p");
// newpara.innerText = "this is a new paragraph created using javascript";
// console.log(newpara);

// let div = document.querySelector("div");
// div.append(newpara);

// let newheading = document.createElement("h3");
// newheading.innerText = "this is a new heading created using javascript";
// console.log(newheading);
//  document.querySelector("body").prepend(newheading);

// let para = document.querySelector("p");
// para.remove();

// // / / events // //
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = function () {
//     alert("Button clicked using JS");
// let a  = 10;
// a++;
// console.log(a);
// }

// let btn2 = document.querySelector("#btn2");
// btn2.ondblclick =  (evt) =>{   
// console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// console.log(evt.clientX);
// console.log(evt.clientY);
// };

// let box = document.querySelector("#box");
// box.onmouseover = function () {
//     console.log("Mouse over using JS");
// }


// btn1.addEventListener("click", () => {
//     console.log("Button clicked using event listener handler1");
// });
// btn1.addEventListener("click", () => {
//     console.log("Button clicked using event listener handler2");
// });
// const handler3 = () => {
//     console.log("Button clicked using event listener handler3");
// };
// btn1.addEventListener("click", handler3);


// btn1.addEventListener("click", () => {
//     console.log("Button clicked using event listener handler4");
// });

// btn1.removeEventListener("click", handler3);            
    

// //    clases and objects
// const student = {
//     name: "John",
//     marks: 95,
//     printmarks: function () {
//         console.log("marks:", this.marks);
//     }
//     };

// //prototype
// const employee = {
//     calctax: function () {
//         console.log("tax rate is 10%"); 
//     }
// };

// const emp1 = {
//     salary: 50000,
// }
// const emp2 = {
//     salary: 60000,
// }   
// const emp3 = {
//     salary: 70000,
//     calctax: function () {
//         console.log("tax rate is 20%");
//     }
// }
// emp1.__proto__ = employee;
// emp2.__proto__ = employee;
// emp3.__proto__ = employee;
// emp1.calctax();
// emp2.calctax();
// emp3.calctax();

// clases
// class HundaiCar {
//     start() {
//         console.log("Hundai car started");
//     }       
//     stop() {                
//         console.log("Hundai car stopped");
//     }   
//     setspeed(speed) {
//         this.speed = speed;
//         console.log("Speed set to", speed);
//     }
// }

// let Creta = new HundaiCar();
// Creta.setspeed("60");

// class toyotaCar {
//     constructor(color,mileage) {
//         console.log("Toyota car created");
//         this.color = color;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("Toyota car started");
//     }           
//     stop() {                
//         console.log("Toyota car stopped");
//     }   
// }

// let innova = new toyotaCar("red", 15);
// console.log("Innova ");
// let fortuner = new toyotaCar("black", 20);
// console.log("Fortuner ");


// // inhertance

// class person {
//     constructor( name) {
//         this.name = name;
//         this.species = "Homo Sapiens";
//     }

//     eat() {
//         console.log("person is eating");
//     }   
//     sleep() {
//         console.log("person is sleeping");
//     }
//     work() {
//         console.log("do nothing");
//     }
// }

// class student extends person {
//     study() {
//         console.log("student is studying");
//     }
// }

// class enginer extends person {
//     constructor(name) {
//         super(name);
//         this.branch = "Computer Science";
//     }
//     work() {
//             super.eat(); // this will call the method of parentclass
//         console.log("enginer is working");
//     } 
  
// }

// let stud1 = new student("John");
// stud1.eat();
// stud1.sleep();
// stud1.study();

// let eng1 = new enginer("Alice");
// eng1.eat();
// eng1.sleep();
// eng1.work(); // here work method of enginer class is called due to method overriding


// error handling
// let a = 10;
// let b = 30;
// console.log("a=", a);
// console.log("b=", b);
// console.log("a+b=", a + b);
// try{
//     console.log("a+b=", a + c); //error
// }catch(err){
//     console.log(err)
// }
// console.log("a+b=", a + b);
// console.log("a+b=", a + b);
// console.log("a+b=", a + b);


// asynchronous 
// console.log("one")
// console.log("two")

// setTimeout(()=>{
//     console.log("hello");
// },5000);
// console.log("three")
// console.log("four")

// // call back
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum);

// function getdata(dataId,getnextdata){
//     setTimeout(()=>{
//     console.log("data",dataId);
//     if(getnextdata){
//     getnextdata();
//     }
// },2000);
// }

// getdata(1,()=>{  // this is callback hell 
//   getdata(2,()=>{
// getdata(3)});
// });


