// interface Person{
//     name:string,
//     age:number,
//     gender:string
//     aadhar?:number // '?' makes the property optional.
// }

// // Note = add ? mark is Persent Potional key word


// const obj:Person={
//     name:"Pritam",
//     age:20,
//     gender:"Male",
//     // aadhar:750210864126
// }

// console.log(obj)



// ====================== 1. Partial<T> ==================================
// Makes all properties optional.

// interface customer {
//     name:string,
//     age:number,
//     balance:number
// }

// const obj2 : customer ={
//     name:"ankit",
//     age:12,
//     balance:27267,
// }

// console.log(obj2)


// ====================== Required<T> ==================================
// Makes all properties required.


// interface Person {
//     name: string;
//     age?: number;
// }

// type RequiredPerson = Required<Person>;

// const obj: RequiredPerson = {
//     name: "Pritam",
//     age: 20
// };

// Now age is mandatory.

// ====================== Readonly<T> ==================================
// Prevents modification of properties.

// interface Person {
//     name: string;
//     age: number;
// }

// const obj: Readonly<Person> = {
//     name: "Pritam",
//     age: 20
// };

// obj.age = 25; // ❌ Error


// ===================================Pick<T, K>============================
// Selects only specific properties.


// interface Person {
//     name: string;
//     age: number;
//     gender: string;
// }

// type PersonInfo = Pick<Person, "name" | "age">;

// const obj: PersonInfo = {
//     name: "Pritam",
//     age: 20
// };


// ======================================Omit<T, K>======================
// Removes specific properties.
// interface Person {
//     name: string;
//     age: number;
//     gender: string;
// }

// type PersonWithoutGender = Omit<Person, "gender">;



// =========================Record<K, T>========================

// Creates an object type with specific keys and value types.

// type Students = Record<string, number>;

// const marks: Students = {
//     Pritam: 90,
//     Rahul: 85,
//     Aman: 95
// };




// | Utility Type   | Purpose                                    |
// | -------------- | ------------------------------------------ |
// | `Partial<T>`   | Make all properties optional               |
// | `Required<T>`  | Make all properties required               |
// | `Readonly<T>`  | Make properties read-only                  |
// | `Pick<T, K>`   | Select specific properties                 |
// | `Omit<T, K>`   | Remove specific properties                 |
// | `Record<K, T>` | Create an object type with keys and values |



// =========================Array of Object ===========================================

interface people {name:string,age:number};

const arr : people [] = [{name:"Rohit" ,age:24},{name:"Pritam" ,age:37}]

console.log(arr)