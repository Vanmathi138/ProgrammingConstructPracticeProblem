let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);

function checkPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(`Prime numbers between ${start} and ${end}:`);
for (let i = start; i <= end; i++) {
    if (checkPrime(i)) console.log(i);
}
