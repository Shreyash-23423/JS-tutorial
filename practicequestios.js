// question 1
// let number = prompt("Enter your Number")
// if(number%5== 0 ){
//     console.log("Number is divisible by 5")
// }else{
//     console.log("Number is not divisible by 5")
// }


// // questions 2
// let score = prompt("Enter your score")
// if(score >= 90 && score <= 100){
//     console.log("You got A")
// }else if(score >= 70 && score < 89){
//     console.log("You got B")
// }else if(score >= 60 && score < 69){
//     console.log("You got C")
// }else if(score >= 50 && score < 59){
//     console.log("You got D")
// }else{
//     console.log("You got F")
// } 



// // question 3
// for(i=0; i<100; i++){
//    if (i%2==0){
//        console.log( i);
//    }
// }


// // question 4
// let gamenumber =25;
// let userguess = prompt("Guess the number between 1 and 100");
// while(userguess != gamenumber){

//     userguess = prompt("you entered the wrong number. Guess again:");
// }
// console.log("Congratulations! You guessed the correct number.");


// // // question 5
// let fullName = prompt("Enter your full name:");
// let str1= fullName.trim();
// let str2 = str1.length;
// console.log("@"+ str1 + str2 );

// //  // question 6
// let total = 0;
// let marks = [90, 68, 70, 60, 50];
// for (let val of marks) {
//     total += val;
// }
// let average = total / marks.length;
// console.log("Average marks:", average);



// // question 7
// let i=0;
 let items =[200, 300, 400, 500, 600];
// for( let val of items){
//     console.log(`Item at index ${i}: ${val}`);
//     let offer= val/10;
//     items[i]= items[i]  - offer;
//    console.log(`Price after 10% discount: ${items[i]}`);
//     i++;
// }


// //or

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     console.log(`Price after 10% discount: ${items[i]}`);
// }

// // // question 8
// let company = ["Google", "Facebook", "Amazon", "Apple", "Microsoft"];
// company.shift();
// console.log(company);   
// company.splice(2,1, "Oracle");
// console.log(company);
// company.push("Tesla");
// console.log(company);


// // // // question 9
// function countVowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if("aeiouAEIOU".includes(char)) {
//             count++;
//         }
//     }
//   console.log(count);
// }

// // // // question 10
// const countVowels = (str) => {
//     let count = 0;
//     for (let char of str) {
//         if("aeiouAEIOU".includes(char)) {
//             count++;
//         }
//     }
//     console.log(count);
// }


// // // question 11
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// number.forEach(function(num) {
//     number=num * num;
//     console.log(number);
// });

// // // // question 12
// let marks =[55,76,78,89,90,45,34,23,67];
// let passedstudents= marks.filter((mark)=>{
//     return mark >= 60;
// });
// console.log("Passed students:", passedstudents);

// // // // question 13
// let n=prompt("Enter a number :",);
// let arr=[];
// for(i=1; i<=n; i++){
//     arr[i-1]=i;
// }
// let sum =arr.reduce((accumulator, current)=>{
//     return accumulator + current;
// }, 0);
// console.log("Sum of first " + n + " natural numbers is: " + sum);

// let product = arr.reduce((accumulator, current) => {
//     return accumulator * current;
// }, 1);
// console.log("Product of first " + n + " natural numbers is: " + product);

