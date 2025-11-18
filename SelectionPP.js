//1. Read 5 Random 3-Digit Values → Find Min & Max

let nums = [];
for(let i=0; i<5;i++){
    let num = Math.floor(Math.random() * 900)+100;
    nums.push(num);
}

console.log("Ramdom 3 digit numbers = ", nums);

let min = Math.min(...nums);
let max = Math.max(...nums);

console.log("Minimum number = ",min);
console.log("Maximum  number = ",max);

//2. Check if Date is Between March 20 to June 20
let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

let isValid = 
(month === 3 && day >= 20) ||
(month === 4 ) ||
(month === 5) ||
(month === 6 && day <= 20);

console.log(isValid);


// 3. Check Leap Year
let year = parseInt(process.argv[2]);

if (year < 1000 || year > 9999) {
    console.log("Not a 4 digit year");
} else {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is NOT a Leap Year");
    }
}

//4. Coin flip

let flip = Math.random();

if (flip < 0.5) {
    console.log("Heads");
} else {
    console.log("Tails");
}
