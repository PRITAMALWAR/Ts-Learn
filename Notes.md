

TypeScript is a superset of JavaScript.

That means:

Every valid JavaScript code is valid TypeScript.
TypeScript adds types to JavaScript.
Types help catch errors before running the code.

====================================================================================


Type Inference:

TypeScript can often guess the type automatically.
This feature is called Type Inference

let name = "Rahul";

name = "Amit"; // ✅ Allowed
name = 100;    // ❌ Error

====================================================================================


any vs unknown:

Both any and unknown can hold any type of value, but they behave very differently.


any:any turns off TypeScript checking.

ex.
let data: any = "Hello";

data = 100;
data = true;


unknown: unknown can store any value, but you must check the type before using it.

let data: unknown = "Hello";

data.toUpperCase(); // Error



let value: any = 42;

value.toUpperCase(); // No TypeScript error




let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}


any → Type checking off
unknown → Type checking on until you verify the type


<!-- ===================================interface vs type ================================================= -->
Most common answer:

interface is mainly used for object structures, while type is more flexible because it can also represent unions, primitives, and complex type combinations.