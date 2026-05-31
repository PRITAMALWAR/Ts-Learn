"use strict";
// =====================================================================
// Everything is allowed.like string , number, boolean
// let userName: any = "ankit";
// userName = "ram"
// userName = true
// console.log(userName)
// =====================================================================
// let data: any = "Hello";
// console.log(data.toUpperCase())
// data = 100;
// console.log(data.toUpperCase()) //TypeScript does not warn you.  given a Runtime errro
// =====================================================================
let value = "Hello";
if (typeof value == "string") {
    console.log(value.length);
}
