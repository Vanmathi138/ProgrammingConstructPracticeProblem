let a = parseFloat(process.argv[2]);
let b = parseFloat(process.argv[3]);
let c = parseFloat(process.argv[4]);

let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

console.log("Operation 1 (a + b * c) =", op1);
console.log("Operation 2 (a % b + c) =", op2);
console.log("Operation 3 (c + a / b) =", op3);
console.log("Operation 4 (a * b + c) =", op4);

let max = Math.max(op1, op2, op3, op4);
let min = Math.min(op1, op2, op3, op4);

console.log("\nMaximum =", max);
console.log("Minimum =", min);
