
// ===============================================
// Example 1: String Inference

let userName:string = "ankit";

userName = "Pritam" // Allowed
userName = 23; // not-Allowed

console.log(userName)

// ===============================================
// Example 2: Number Inference


let score = 95;

score = 100;     // ✅ Allowed
score = "high";  // ❌ Error


// ===============================================
// Example 3: Boolean Inference

let isActive = true;

isActive = false; // ✅ Allowed
isActive = "yes"; // ❌ Error