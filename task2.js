function findKthCharacter(k) {
    let word = "a"; 
    

    while (word.length < k) {
        let newPart = ''; 
        
        for (let char of word) {
            if (char === 'z') {
                newPart += 'a'; 
            } else {
                newPart += String.fromCharCode(char.charCodeAt(0) + 1); 
            }
        }
        
        word += newPart;
    }
    
    return word[k - 1];
}

// Example 1:
let k1 = 5;
console.log(`Example 1: k = ${k1}, Output = "${findKthCharacter(k1)}"`);

// Example 2:
let k2 = 10;
console.log(`Example 2: k = ${k2}, Output = "${findKthCharacter(k2)}"`);

// Example 3:
let k3 = 1;
console.log(`Example 3: k = ${k3}, Output = "${findKthCharacter(k3)}"`);

let k4 = 26;
console.log(`Example 4: k = ${k4}, Output = "${findKthCharacter(k4)}"`);
