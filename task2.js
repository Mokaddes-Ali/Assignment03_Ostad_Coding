
function encryptString(s) {
    let transformed = "";
    let count = 1;

    for (let i = 1; i <= s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            transformed += count + s[i - 1];
            count = 1;
        }
    }

    let encrypted = transformed.split('').reverse().join('');

    return encrypted;
}


function decryptString(s) {
    let reversed = s.split('').reverse().join('');

    let decrypted = "";
    for (let i = 0; i < reversed.length; i++) {
        if (!isNaN(reversed[i])) {
            let count = parseInt(reversed[i], 10);
            let char = reversed[i + 1];
            decrypted += char.repeat(count);
            i++; 
        }
    }

    return decrypted;
}


// Example 
let input = "aaaaaaaaaaa";
let encrypted = encryptString(input);
console.log("Encrypted:", encrypted);

let decrypted = decryptString(encrypted);
console.log("Decrypted:", decrypted);


