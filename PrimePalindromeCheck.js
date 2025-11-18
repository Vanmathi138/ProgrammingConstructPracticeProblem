function primePalindromeCheck(num) {
    if (!isPrime(num)) {
        return `${num} is NOT a prime number.`;
    }

    let pal = getPalindrome(num);

    if (isPrime(pal)) {
        return `${num} is prime AND its palindrome ${pal} is also prime.`;
    } else {
        return `${num} is prime BUT its palindrome ${pal} is NOT prime.`;
    }
}

console.log(primePalindromeCheck(13)); 
console.log(primePalindromeCheck(23)); 


function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return Number(num.toString().split("").reverse().join(""));
}
