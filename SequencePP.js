//1
let r1 = Math.floor(Math.random() * 10);
console.log("Use Random func to get single digit :- "+ r1);

//2
let r2 = Math.floor(Math.random() * 6)+1;
console.log("Use Random to get dice number between 1 to 6 :- "+r2);

//3
let dice1 = Math.floor(Math.random() * 6)+1;
let dice2 = Math.floor(Math.random() * 6)+1;
console.log("Add 2 random dice number :- "+dice1+dice2)

//4
let sum =0;
console.log("Five random 2 digit numbers")

for(let i = 0; i<5;i++){
    let num = Math.floor(Math.random() * 90)+10;
    console.log(num);
    sum += num;
}

let avg = sum/5;
console.log("Sum of random 2 digit : "+sum);
console.log("Average of random 2 digit : " +avg);

//5 - a
let inches = 42;
let feet = inches/12;
console.log("42 inches in feet = "+feet);

//5 - b
let lengthFeet = 60;
let widthFeet = 40;

let lengthMeter = lengthFeet * 0.3048;
let widthMeter = widthFeet * 0.3048;

console.log("Plot in meters =", lengthMeter, "x", widthMeter);

//5 - b
let areaOnePlot = lengthMeter * widthMeter;
let area25 = areaOnePlot * 25;
let acres = area25 / 4046.86;

console.log("Area of 25 plots in acres =", acres);

