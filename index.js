"use strict";
//1
// let number = 1;
// while (number <= 10) {
//   console.log(number);
//   number += 1;
// }
//2
// for (let i = 2; i <= 20; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }
//3
// for (let i = 1; i <= 10; i += 1) {
//   console.log(i * 7);
// }
//5
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i <= 10; i += 1) {
//   let number = array.indexOf(i) + 1;
//   if (number === 7) {
//     continue;
//   } else {
//     console.log(number);
//   }
// }
//6
// const n = 15;
// for (let i = 1; i < n; i += 1) {
//   console.log(i);
// }
//4
// const array = [1, 2, 3, 4, 5];
// let i = 0;
// while (i >= 5) {
//   let number = array.indexOf(i) + 1;
//   console.log(number);
//   i += 1;
// }
//7
// За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
let i = 1;
while (i >= 20) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    continue;
  }
  i += 1;
}
