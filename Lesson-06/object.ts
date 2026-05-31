

// let user:{
//     name:string;
//     age:number;
// }={
//     name:"ankit",
//     age:23
// }

// console.log(user)
// console.log(user.name);



// ===============================

// Example 2: Optional Property

// const user: {
//   name: string;
//   age?: number;
// } = {
//   name: "Amit"
// };

// user.age = 10;

// console.log(user.name);
// console.log(user.age);



// ===============================



const employee: {
  name: string;
  address: {
    city: string;
    pincode: number;
  };
} = {
  name: "Rahul",
  address: {
    city: "Jaipur",
    pincode: 302001
  }
};

console.log(employee.address.city);