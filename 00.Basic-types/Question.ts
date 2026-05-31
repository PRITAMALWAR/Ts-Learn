// 1. Create a variable named name and store your name in it. Print it.

// let UserName:string = "Pritam";
// console.log(UserName);




// ========================================


// 2. Create a constant PI with value 3.14 and print it.


// const PI:number = 3.14
// console.log(PI)


// ===========================================================
// 3. Swap two variables.


// let a = 10 ;
// let b = 20 ; 


// let temp = a;
// a = b
// b = temp

// console.log(a)
// console.log(b)



// ===========================================================
// Data Types
// 4. Create variables of type string, number, and boolean.


// let MyName:string = "ankit";
// let Age:number = 23;
// let isStudent:boolean =true;

// console.log(`MyName is ${MyName},${Age},${isStudent}`)


// ===========================================================

// 5. Find the type of each variable.


// let x = "Hello";
// let y = 100;
// let z = false;
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);


// ==========================================================



// Functions
// 6. Create a function that adds two numbers.

// function add (a: number, b: number):number {
//     return a + b;
// }


// console.log(add(2,4))



// ==========================================================

// 7. Create a function that returns the square of a number.


// function square(a:number) : number {
//     return a*a
// }

// console.log(square(3))






// ==========================================================

// 8. Create a function that greets a user


// function greets(name:string) : void {
//     console.log(`Name : ${name}`)

// }

// greets("ankit")


// ==========================================================

// Arrays
// 9. Create an array of 5 fruits and print the first fruit.

// Answer

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// console.log(fruits[0]);


// ==========================================================

// 10. Print all array elements using a loop.

// let numbers = [10, 20, 30, 40, 50];

// for(let i =0; i<numbers.length; i++){
//     console.log(numbers[i])
// }


// ==========================================================


// 11. Find the sum of array values.

// let arr = [10,20,30,40]
// let sum = 0;

// for(let i = 0; i<arr.length; i++){
//     sum +=arr[i]
// }
// console.log(sum)



// ==========================================================
// Objects
// 12. Create a student object.


// let Student = {
//     naem:"Ankit",
//     age:23,
//     isStudent:true
// }

// console.log(Student.age)



// ==========================================================


// 13. Print only the student's name.


// let Student = {
//     name:"Eco",
//     age:21,
//     isStudent:true
// }

// console.log(Student.name)


// ==========================================================


// Conditions (if, else)
// 15. Check whether a number is even or odd.

// Answer


// let num = 8;

// if(num%2 == 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }


// ==========================================================

// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wednesday");
//     break;

//   default:
//     console.log("Invalid");
// }


// ======================================================

// Array


// let marks:number[] = [12,22,3,3,4,55,6]
// console.log(marks)
// console.log(typeof marks)


// =======================================================================


// let student : {
//     name:string;
//     age:number;
// } = {
//     name:"Pritam",
//     age: 23
// }


// console.log(student.name)
// console.log(student.age)


// =======================================================================

// Union Type

// let id : number | string = 1001;
// id = "ankit"
// console.log(id)


// =======================================================================



// Functions + Union Types


// function printId(id : number | string) : void{
//     console.log(id)
// }

// printId("Ram")

// =======================================================================
