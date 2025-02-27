function isPowerOfFive(n) {
    if (n < 1) {
        return false;
    }
    while (n % 5 === 0) {
        n = n / 5;
    }
    return n === 1;
}

// Example 1
console.log(isPowerOfFive(25));

// Example 2
console.log(isPowerOfFive(4));  