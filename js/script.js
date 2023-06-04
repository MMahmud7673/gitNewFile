"use strict";


// let number = 10;
//     number = 20; 
// const myName = 'mahmud';
// console.log(number , myName);

// const Myname = {
//     name: 'Mirsaidov',
// };
// console.log(Myname);


// o'zgaruvchilar ular ikki turda bo'lib birinchi turi "let" bilan beriladi va ular erkin o'zgaradi

// ikkinchi turi  bu const bo'lib bu tur abyekt  bo'lganida o'zgartira olamiz boshhqa hollatda esa o'zgartira olmaymiz 


// primitive  haqida va uning turlari
// N:1 boolean 
// const isMarrid = true; // to'g'ri / noto'g'ri
// N:2 Nool 

// N:3 Undefined     -- bor lekin hech qanday qiymati yoq bo'lgan narsani chaqirganda qaytaradi

// N:4 Number
// let number2 = 10;
// console.log(10 / 0);  //Infinity - 
// console.log("Mahmud" + 6); // NaN - 

// // N:5 String
// const wordName = "mahmud mirsaidov 8";
// console.log(wordName);
// N:6 Symbol

// N:7 Null   --yoq o'zgaruvchini chaqirish


// // Object  
// const theif = {
//     age: 30, 
//     jacked: "black",
//     long: false,
// }; 

// console.log(theif);


// Array


// const colors = ["red" , "black" , "green" , 10 , [] , {}];
// console.log(colors[4]);

// ========================================= confirm ha yoki yo'q dega javobni oladi ================
// const sand = confirm("Are you here?");
// console.log(sand);


// ========================================= prompt esa yozma javob oladi ===========================

// const sand = +prompt("How old are you?" , "");
// console.log( sand);

// const color = [];
// color[0] = prompt("yoqtirgan rangingiz ?" , "");
// color[1] = prompt("yoqtirgan rangingiz ?" , "");
// color[2] = prompt("yoqtirgan rangingiz ?" , "");
// console.log(typeof color);

// const channel = prompt("what's your fevourite youtuber ?" , "");
// console.log(`https://youtube.com/${channel}/videos`);

const user = prompt("Ismingiz" , "");
const job = prompt("nima ish qilasiz" , "");
console.log(`His name is ${user} , he is ${job}`);

console.log(9 % 5);
