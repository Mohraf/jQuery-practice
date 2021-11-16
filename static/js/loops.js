// var languages = ['HTML', 'CSS', 'JavaScript'];
// languages.forEach((language) => {
//   console.log('I love ' + language + ' !');
// })

// var total = 0;
// var summands = [1, 2, 3, 4, 5];
// summands.forEach((summand) => {
//   total += summand;
// });

// alert(total);

// var numbers = [1,2,3,4,5];
// var doubledNumbers = numbers.map((number) => {
//   return number * 2; 
// });

// console.log(doubledNumbers);

// let count = 10
// let number = 14

// for (let y = 0; y <= 10; y++){
// 	console.log("I love JS")
// }

let numbers = [10, 50, 67, 99, 54, 87, 30, 1, -4, 38, 48]
evenNumbers = []
oddNumbers =[]

// numbers.forEach((number) => {
//   if((number%2) == 0){
//     evenNumbers.push(number);
//   }
// });

// console.log(evenNumbers);

for (let i = 0; i < numbers.length; i++){
  let number = numbers[i];
  if((number%2) == 0){
    evenNumbers.push(number);
  }
  else {
    oddNumbers.push(number);
  }
};

console.log("Even Numbers", evenNumbers); 
console.log("Odd Numbers", oddNumbers);

// Word Puzzle to replace vowels with hyphens

let vowels = new Array("a", "e", "i", "o", "u");
let inputString = "Believe you can and you're halfway there. Robert Mugabe";

for (i = 0, i<= inputString.length; i++){
  if(i == )
};