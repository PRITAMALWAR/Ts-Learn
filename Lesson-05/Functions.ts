


function add(a:number, b:number):number{
    return a + b;
}


console.log(add(2,3))


// Optional Parameters

function greet(name: string, city?: string) {
  return `${name} from ${city}`;
}


greet("Rahul");
greet("Rahul", "Jaipur");



// ===========================================
function introduce(name: string, age?: number) {
  if (age) {
    return `${name} is ${age} years old`;
  }

  return name;
}

console.log(introduce("Amit"));
console.log(introduce("Amit", 25));